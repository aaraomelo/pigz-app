import { useRef } from "react";
import Form from ".";
import { unmask } from "../../Store/masks";
import useStore from "../Hooks/useStore";

export default function FormPostal(props) {
  const { $bind } = useStore(props.pointer);
  const ref = useRef();
  const value = unmask.cep(ref?.current?.value ?? '');
  if (value.length === 8) {
    console.log($bind);
    console.log(value);
  }
  return (
    <Form.Field ref={ref} {...props} />
  );
}
