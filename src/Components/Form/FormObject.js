import Form from ".";
import { filterSchema, generateClassName } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormObject({ pointer }) {
  const { properties } = useStore(pointer);
  const data = filterSchema(properties,
    (key) => properties[key].type !== 'object'
  );
  return (
    <Form
      className={generateClassName('form', pointer)}
    >
      {Object.keys(data).map((property) =>
        <Form.Input
          key={property}
          pointer={`${pointer}.properties.${property}`}
        />
      )}
    </Form>
  );
}
