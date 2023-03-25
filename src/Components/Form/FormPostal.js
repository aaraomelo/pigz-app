import { useEffect, useRef } from 'react';
import Form from '.';
import useStore from '../Hooks/useStore';

export default function FormPostal(props) {
  const field = useStore('form');
  const ref = useRef();
  const payload = ref?.current?.value ?? '';
  useEffect(() => {
    if (payload.length === 9) {
      field[props.pointer] = {
        type: 'getAddress',
        payload,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload.length]);
  return (
    <Form.Field ref={ref} {...props} />
  );
}
