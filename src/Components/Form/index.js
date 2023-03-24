import { Children, cloneElement } from "react";
import FormControl from "./FormControl";
import FormField from "./FormField";
import FormObject from "./FormObject";

export default Object.assign(
  ({ children, pointer }) => (
    <form className={`form`}>
      {Children.map(children, (child) =>
        cloneElement(child, { ...child.props, pointer })
      )}
    </form>
  ),
  {
    Object: FormObject,
    Control: FormControl,
    Field: FormField,
  }
);
