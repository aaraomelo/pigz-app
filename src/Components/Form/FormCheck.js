import Form from '.';
import useStore from '../Hooks/useStore';

export default function FormCheck({ pointer, ...rest }) {
  const field = useStore(pointer);
  const { state: checked = false, inputType: type = 'checkbox' } = field;
  const control = {
    type,
    pointer,
    checked,
    onChange: (e) => {
      field[pointer] = {
        type: 'setFormField',
        payload: e.target.checked
      }
    },
    ...rest
  };
  return (
    <Form.Field {...control} />
  );
}
