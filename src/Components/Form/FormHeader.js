import { Fragment } from "react";
import Form from ".";
import { generateClassName } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormHeader({ pointer, ...rest }) {
  return (
    <header
      className={generateClassName('form-header', pointer)}
      {...rest}
    >
      {<Form.Title pointer={pointer} />}
      {<Form.Subtitle pointer={pointer} />}
    </header>
  );
}
