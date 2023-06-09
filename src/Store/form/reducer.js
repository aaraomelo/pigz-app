import { createAction, createReducer } from "@reduxjs/toolkit";
import { FormInitialState as initialState } from "./state";
import * as actionTypes from "./actionTypes";
import { proxySchema } from "../proxy";
import { unmask } from "../masks";
import validations from "../validations";

const setFormField = createAction(actionTypes.SET_FORM_FIELD);
const updateForm = createAction(actionTypes.UPDATE_FORM);
const bindForms = createAction(actionTypes.BIND_FORMS);

export default createReducer(initialState,
  (builder) => {
    builder
      .addCase(setFormField, (state, { payload: { pointer, value } }) => {
        const field = proxySchema(state, pointer);
        field.state = unmask[field.mask ?? 'default'](value);
        validateField(field);
      })
      .addCase(bindForms, (state, { payload: { pointer: p, value } }) => {
        const { $bind: { pointer, properties } } = proxySchema(state, p);
        const schema = proxySchema(state, pointer);
        Object.keys(properties).forEach((prop) => {
          schema.properties[properties[prop]].state = value[prop]
        });
        reflect(state, state.state = {})
      })
      .addCase(updateForm, (state) => {
        reflect(state, state.state = {})
      })
  }
);

export function reflect(prevSchema, nextSchema) {
  Object.keys(prevSchema.properties).forEach((key) => {
    if (prevSchema.properties[key].type === "object") {
      reflect(prevSchema.properties[key], nextSchema[key] = {});
    } else {
      nextSchema[key] = prevSchema.properties[key].state ?? '';
    }
  })
}

export const validateField = (field) => {
  if (!field?.validation) return;
  field.blur = true;
  field.validator = [];
  Object.keys(field.validation).forEach((name) => {
    !validations[name](field.state, field.validation[name]) &&
      field.validator.push(`form.error.validation.${name}`);
  });
}
