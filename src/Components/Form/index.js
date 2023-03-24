import FormAction from "./FormAction";
import FormControl from "./FormControl";
import FormDropdown from "./FormDropdown";
import FormField from "./FormField";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormObject from "./FormObject";
import FormSubtitle from "./FormSubtitle";
import FormTitle from "./FormTitle";

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
    Title: FormTitle,
    Subtitle: FormSubtitle,
    Header: FormHeader,
  }
);
