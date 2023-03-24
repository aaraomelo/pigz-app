import Form from ".";
import { generateClassName, numberNames } from "../../utils";
import Dropdown from "../Dropdown";
import { useStore } from "../Hooks/useStore";

export default function FormDropdown({ pointer, ...rest }) {
  const { placeholder, enum: en } = useStore(pointer);
  const list = en.map((value, index) => {
    return {
      name: numberNames[index],
      value
    }
  })
  return (
    <Dropdown
      list={list}
      className={generateClassName('form-dropdown', pointer)}
    >
      <Form.Control className={generateClassName('form-control', pointer)} />
    </Dropdown>
  );
}

