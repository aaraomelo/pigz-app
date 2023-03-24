import Button from "../Button";
import { useStore } from "../Hooks/useStore";

export default function FormAction({
  className,
  pointer,
  index,
  ...rest
}) {
  const { actions } = useStore(pointer);
  const { title } = actions[index];
  return (
    <Button
      className={`form-action ${className}`}
      {...rest}
    >
      {title}
    </Button>
  );
}