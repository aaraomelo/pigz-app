import { createAction, createReducer } from "@reduxjs/toolkit";
import { FlowInitialState as initialState } from "./state";
import * as actionTypes from "./actionTypes";

const setFlowStep = createAction(actionTypes.SET_FLOW_STEP);

export default createReducer(initialState,
  (builder) => {
    builder
      .addCase(setFlowStep, (state, action) => { })
  }
);
