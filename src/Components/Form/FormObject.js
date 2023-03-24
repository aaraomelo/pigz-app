import { filterSchema } from "../../utils";
import { useStore } from "../Hooks/useStore";

export default function FormObject({ pointer }) {
  const { properties } = useStore()[pointer]
  const data = filterSchema(properties,
    (key) => properties[key].type !== 'object'
  )
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
