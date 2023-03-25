import { Fragment } from "react";
import Form from "."

export default function FormInput({
  type,
  inputType = 'text',
  ...rest
}) {
  switch (type) {
    case 'boolean':
      return <Form.Check {...rest} />;
    default:
      switch (inputType) {
        case 'text':
          return <Form.Field {...rest} />;
        case 'postal':
          return <Form.Postal {...rest} />;
        case 'dropdown':
          return <Form.Dropdown {...rest} />;
        default:
          return <Fragment />;
      }
  }
}