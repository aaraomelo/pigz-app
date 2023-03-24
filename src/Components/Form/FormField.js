import Form from ".";
import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

export default function FormField({ pointer, ...rest }) {
  const field = useStore(pointer);
  const { placeholder, state: value = '' } = field;
  const control = {
    value,
    onChange: (e) => {
      e.preventDefault();
      field[pointer] = {
        type: 'setFormField',
        payload: e.target.value
      }
    },
    placeholder,
  };
  return (
    <Form.Control
      className={generateClassName('form-control', pointer)}
      {...control}
      {...rest}
    />
  );
}

