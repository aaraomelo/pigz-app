import { Fragment } from "react";
import Form from "."

export default function FormInput({
  inputType = 'text',
  ...rest
}) {
  switch (inputType) {
    case 'text':
      return <Form.Field {...rest} />;
    default:
      return <Fragment />;
  }
}