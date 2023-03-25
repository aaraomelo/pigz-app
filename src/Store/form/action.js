import * as actionTypes from "./actionTypes";

export const setFormField = (payload) => ({ type: actionTypes.SET_FORM_FIELD, payload })
export const updateForm = (payload) => ({ type: actionTypes.UPDATE_FORM, payload })
export const bindForms = (payload) => ({ type: actionTypes.BIND_FORMS, payload })
