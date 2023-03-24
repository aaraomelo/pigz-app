import FormAction from "./FormAction";
import FormControl from "./FormControl";
import FormDropdown from "./FormDropdown";
import FormField from "./FormField";
import FormInput from "./FormInput";
import FormObject from "./FormObject";

export default Object.assign(
  ({ children, className }) => (
    <form
      className={`form ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </form>
  ),
  {
    Object: FormObject,
    Control: FormControl,
    Field: FormField,
    Input: FormInput,
    Dropdown: FormDropdown,
    Action: FormAction,
  }
);
