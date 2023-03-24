import { Fragment } from "react";
import { generateClassName } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormSubtitle({ pointer, ...rest }) {
  const { subtitle } = useStore(pointer);
  return !subtitle ? <Fragment /> : (
    <h2 className={generateClassName('form-title', pointer)}>
      {subtitle}
    </h2>
  );
}

