import { forwardRef } from "react";

const FormControl = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={`form-control ${className}`}
      {...rest}
    />
  )
});

export default FormControl;

