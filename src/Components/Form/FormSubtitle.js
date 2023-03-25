import { Fragment } from "react";
import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

export default function FormSubtitle({ pointer, ...rest }) {
  const { subtitle } = useStore(pointer);
  return !subtitle ? <Fragment /> : (
    <h2
      className={`form-subtitle ${generateClassName('form-subtitle', pointer)}`}
    >
      {subtitle}
    </h2>
  );
}

