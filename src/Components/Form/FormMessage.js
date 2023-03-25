import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";

export default function FormMessage({ pointer, lang = 'pt', ...rest }) {
  const { validator = [] } = useStore(pointer);
  const translator = useStore('messages')[lang];
  const messages = validator.map(
    (message) => translator[message]
  );
  return (
    <p
      className={`form-message ${generateClassName('form-message', pointer)}`}
      {...rest}
    >
      {messages[0] ?? ''}
    </p>
  );
}
