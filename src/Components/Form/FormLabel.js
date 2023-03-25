import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

export default function FormLabel({ pointer, ...rest }) {
  const { title } = useStore(pointer);
  return (
    <label
      className={`form-label ${generateClassName('form-label', pointer)}`}
      {...rest}
    >
      {title}
    </label>
  );
}
