import Button from "../Button";
import useStore from "../Hooks/useStore";

export default function FormAction({
  className,
  pointer,
  index,
  ...rest
}) {
  const field = useStore(pointer);
  const {
    type,
    title,
    payload: {
      pointer: p,
      value
    }
  } = field.actions[index];
  const control = {
    onClick: (e) => {
      e.preventDefault();
      field[p] = {
        type,
        payload: value,
      }
    }
  };
  return (
    <Button
      className={`form-action ${className}`}
      {...control}
      {...rest}
    >
      {title}
    </Button>
  );
}