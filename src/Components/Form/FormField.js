import { forwardRef } from "react";
import Form from ".";
import { mask } from "../../Store/masks";
import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

const FormField = forwardRef(({ pointer, ...rest }, ref) => {
  const field = useStore(pointer);

  const {
    placeholder,
    state: value = '',
    mask: m = 'default',
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
    ...rest,
  };
  return (
    <div className={generateClassName('form-field', pointer)}>
      <Form.Label pointer={pointer} />
      <Form.Control
        ref={ref}
        className={generateClassName('form-control', pointer)}
        {...control}
      />
      <Form.Message pointer={pointer} />
    </div>

  );
})

export default FormField;
