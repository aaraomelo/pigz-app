import { Fragment } from "react";
import Form from "."

export default function FormInput({
  inputType = 'text',
  ...rest
}) {
  switch (inputType) {
    case 'text':
      return <Form.Field {...rest} />;
    case 'dropdown':
      return <Form.Dropdown {...rest} />;
    default:
      return <Fragment />;
  }
}