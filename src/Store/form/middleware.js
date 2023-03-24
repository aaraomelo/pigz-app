import { updateForm } from "./action";
import { SET_FORM_FIELD } from "./actionTypes";

export const formMiddleware = (_store) => (next) => (action) => {
  let result = next(action);
  if (action.type === SET_FORM_FIELD) {
    return next(updateForm());
  }
  return result;
};
