import Form from ".";
import { mask } from "../../Store/masks";
import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

export default function FormField({ pointer, ...rest }) {
  const field = useStore(pointer);
  const {
    placeholder,
    state: value = '',
    mask: m = 'default'
  } = field;
  const control = {
    value: mask[m](value),
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

