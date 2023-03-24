import { Fragment } from "react";
import { useStore } from "react-redux";
import { generateClassName } from "../../utils";

export default function FormSubtitle({ pointer, ...rest }) {
  const { subtitle } = useStore(pointer);
  return !subtitle ? <Fragment /> : (
    <h2 className={generateClassName('form-title', pointer)}>
      {subtitle}
    </h2>
  );
}

