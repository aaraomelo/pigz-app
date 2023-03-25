import axios from "axios";
import { unmask } from "../masks";
import { bindForms } from "./action";

export const sendForm = () => () =>
  new Promise((resolve) => {
    resolve(true)
  })

export const getAddress = ({ pointer, value }) => (dispatch) =>
  new Promise((resolve, reject) => {
    axios.get(`https://viacep.com.br/ws/${unmask.cep(value)}/json/`)
      .then(({ data: value }) => {
        dispatch(bindForms({ pointer, value }))
        resolve(value);
      })
      .catch((error) => {
        reject(error);
      })
  })
