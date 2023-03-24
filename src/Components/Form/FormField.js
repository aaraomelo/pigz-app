import Form from ".";
import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

export default function FormField({ pointer, ...rest }) {
  const { placeholder } = useStore(pointer);
  const control = {
    placeholder,
    ...rest
  };
  return (
    <Form.Control
      className={generateClassName('form-control', pointer)}
      {...control}
    />
  );
}

