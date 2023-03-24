import { createAction, createReducer } from "@reduxjs/toolkit";
import { FlowInitialState as initialState } from "./state";
import * as actionTypes from "./actionTypes";
import { proxySchema } from "../proxy";

const setFlowStep = createAction(actionTypes.SET_FLOW_STEP);

export default createReducer(initialState,
  (builder) => {
    builder
      .addCase(setFlowStep, (state, { payload: { pointer, value } }) => {
        const schema = proxySchema(state, pointer);
        schema.state = value;
      })
  }
);
