import { createAction, createReducer } from "@reduxjs/toolkit";
import { FormInitialState as initialState } from "./state";
import * as actionTypes from "./actionTypes";
import { proxySchema } from "../proxy";
import { unmask } from "../masks";
import validations from "../validations";

const setFormField = createAction(actionTypes.SET_FORM_FIELD);

export default createReducer(initialState,
  (builder) => {
    builder
      .addCase(setFormField, (state, { payload: { pointer, value } }) => {
        const field = proxySchema(state, pointer);
        field.state = unmask[field.mask ?? 'default'](value);
        validateField(field);
      })
  }
);

export const validateField = (field) => {
  if (!field?.validation) return;
  field.blur = true;
  field.validator = [];
  Object.keys(field.validation).forEach((name) => {
    !validations[name](field.state, field.validation[name]) &&
      field.validator.push(`form.error.validation.${name}`);
  });
}
