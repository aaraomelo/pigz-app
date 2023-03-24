import Form from ".";
import { filterSchema, generateClassName } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormObject({ pointer }) {
  const { properties, action } = useStore(pointer);
  const data = filterSchema(properties,
    (key) => properties[key].type !== 'object'
  );

  console.log(action);
  return (
    <Form
      className={generateClassName('form', pointer)}
    >
      {Object.keys(data).map((property) => {
        const { inputType } = data[property];
        return (
          <Form.Input
            key={property}
            inputType={inputType}
            pointer={`${pointer}.properties.${property}`}
          />
        );
      })}
      {action.map((act, index) => (
        <Form.Action
          key={index}
          action={act}
          className={generateClassName('form-action', pointer)}
        />
      ))}
    </Form>
  );
}
