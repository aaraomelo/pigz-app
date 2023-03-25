import { useDispatch, useSelector } from "react-redux";
import { setFlowStep } from "../../Store/flow/action";
import { setFormField } from "../../Store/form/action";
import { getAddress, sendForm } from "../../Store/form/actionCreators";

export const actions = {
  flow: {
    setFlowStep,
  },
  form: {
    setFormField,
    sendForm,
    getAddress,
  },
};

export default function useStore(pointer) {
  const [state, dispatch] = [
    useSelector((state) => !pointer ? state : pointer
      .split(".")
      .reduce((acc, acv) => acc[acv], state)
    ),
    useDispatch(),
  ];
  return new Proxy(state, {
    get: (target, p) => p
      .split(".")
      .reduce((acc, acv) => acc[acv], target),
    set: (_, pointer, { type, payload: value }) => {
      dispatch(
        actions[pointer.split('.')[0]][type]({ pointer, value })
      )
      return true
    },
  })
}
