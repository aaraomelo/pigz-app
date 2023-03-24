import Form from ".";
import { filterSchema, generateClassName } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormObject({ pointer }) {
  const { properties, actions } = useStore(pointer);
  const data = filterSchema(properties,
    (key) => properties[key].type !== 'object'
  );
  return (
    <Form
      className={generateClassName('form', pointer)}
    >
      <Form.Title pointer={pointer} />
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
      {actions.map((_, index) => (
        <Form.Action
          key={index}
          index={index}
          className={generateClassName('form-action', pointer)}
          pointer={pointer}
        />
      ))}
    </Form>
  );
}
