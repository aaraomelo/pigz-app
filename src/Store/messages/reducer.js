import { createReducer } from "@reduxjs/toolkit";
import { MessagesInitialState as initialState } from "./state";

export default createReducer(initialState,
  (builder) => {
    builder
      .addDefaultCase(() => { })
  }
);
