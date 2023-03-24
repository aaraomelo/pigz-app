import { Fragment } from "react";
import { generateClassName } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormTitle({ pointer, ...rest }) {
  const { title } = useStore(pointer);
  return !title ? <Fragment /> : (
    <h1 className={generateClassName('form-title', pointer)}>
      {title}
    </h1>
  );
}

