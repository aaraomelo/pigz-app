import './Form.css';
import FormAction from "./FormAction";
import FormCheck from './FormCheck';
import FormControl from "./FormControl";
import FormDropdown from "./FormDropdown";
import FormField from "./FormField";
import FormFieldIcon from './FormFieldIcon';
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import FormMessage from "./FormMessage";
import FormObject from "./FormObject";
import FormPostal from "./FormPostal";
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
    Label: FormLabel,
    Message: FormMessage,
    Subtitle: FormSubtitle,
    Header: FormHeader,
    Postal: FormPostal,
    Check: FormCheck,
    FieldIcon: FormFieldIcon,
  }
);
