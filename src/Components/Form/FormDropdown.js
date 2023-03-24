import { useRef, useState } from "react";
import Form from ".";
import { generateClassName, numberNames } from "../../utils";
import Dropdown from "../Dropdown";
import { useStore } from "../Hooks/useStore";

export default function FormDropdown({ pointer, ...rest }) {
  const { placeholder, enum: en } = useStore(pointer);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState('');
  const ref = useRef();
  const dropdownControl = {
    className: generateClassName('form-dropdown', pointer),
    open,
    list: en
      .map((value, index) => ({
        index,
        name: numberNames[index],
        value
      }))
      .filter((item) => item.value.includes(state)),
    select: (index) => {
      setState(en[index])
      setOpen(false);
    },
    width: ref?.current?.offsetWidth
  }

  const inputControl = {
    ref,
    className: generateClassName('form-control', pointer),
    placeholder,
    value: state,
    onChange: (e) => { setState(e.target.value) },
    onFocus: () => { setOpen(true) },
  }

  return (
    <Dropdown {...dropdownControl}>
      <Form.Control {...inputControl} />
    </Dropdown>
  );
}

