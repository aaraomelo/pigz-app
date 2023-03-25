import { forwardRef, Fragment } from "react";
import Form from ".";
import { generateClassName } from "../../utils";
import useStore from "../Hooks/useStore";
import SVG from "../SVG";

const FormFieldIcon = forwardRef((props, ref) => {
  const { pointer } = props
  const { enum: en, state = '', icon } = useStore(pointer);
  const index = en.findIndex((v) => v === state);
  const Icon = (!icon || index === -1) ? Fragment : icon[index]
    .split('.')
    .reduce((acc, acv) => acc[acv], SVG);
  return (
    <div
      ref={ref}
      className={generateClassName('form-field-icon', pointer)}
    >
      <div
        className={`form-icon ${generateClassName('form-icon', pointer)}`}
      >
        <Icon />
      </div>
      <Form.Field {...props} />
    </div>
  );
});

export default FormFieldIcon;

