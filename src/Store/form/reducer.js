import { createAction, createReducer } from "@reduxjs/toolkit";
import { FormInitialState as initialState } from "./state";
import * as actionTypes from "./actionTypes";
import { proxySchema } from "../proxy";

const setFormField = createAction(actionTypes.SET_FORM_FIELD);

export default createReducer(initialState,
  (builder) => {
    builder
      .addCase(setFormField, (state, { payload: { pointer, value } }) => {
        const schema = proxySchema(state, pointer);
        schema.state = value;
      })
  }
);
