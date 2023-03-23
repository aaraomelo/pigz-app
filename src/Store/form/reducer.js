import { createAction, createReducer } from "@reduxjs/toolkit";
import { FormInitialState as initialState } from "./state";
import * as actionTypes from "./actionTypes";

const setFormField = createAction(actionTypes.SET_FORM_FIELD);

export default createReducer(initialState,
  (builder) => {
    builder
      .addCase(setFormField, (state, action) => { })
  }
);
