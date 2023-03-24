
export default function FormControl({ className, ...rest }) {
  return (
    <input
      className={`form-control ${className}`}
      {...rest}
    />
  );
}

