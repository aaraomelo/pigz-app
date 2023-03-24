import FormControl from "./FormControl";
import FormField from "./FormField";
import FormInput from "./FormInput";
import FormObject from "./FormObject";

export default Object.assign(
  ({ children, className }) => (
    <form className={`form ${className}`}>
      {children}
    </form>
  ),
  {
    Object: FormObject,
    Control: FormControl,
    Field: FormField,
    Input: FormInput,
  }
);
