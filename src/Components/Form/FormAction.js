import Button from "../Button";

export default function FormAction({ className, action, ...rest }) {
  const { title } = action;
  return (
    <Button
      className={`form-action ${className}`}
      {...rest}
    >
      {title}
    </Button>
  );
}