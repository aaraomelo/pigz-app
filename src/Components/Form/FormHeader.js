import Form from ".";
import { generateClassName } from "../../utils";

export default function FormHeader({ pointer, ...rest }) {
  return (
    <header
      className={generateClassName('form-header', pointer)}
      {...rest}
    >
      <Form.Title pointer={pointer} />
      <Form.Subtitle pointer={pointer} />
    </header>
  );
}
