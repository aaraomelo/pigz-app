import { Fragment, useRef, useState } from "react";
import Form from ".";
import { generateClassName, numberNames } from "../../utils";
import Dropdown from "../Dropdown";
import useStore from "../Hooks/useStore";

export default function FormDropdown({ pointer, ...rest }) {
  const field = useStore(pointer);
  const { enum: en, state = '' } = field;
  const [open, setOpen] = useState(false);
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
      field[pointer] = {
        type: 'setFormField',
        payload: en[index]
      }
      setOpen(false);
    },
    width: ref?.current?.offsetWidth
  }
  return (
    <Dropdown
      {...dropdownControl}
      {...rest}
    >
      <Form.Field
        ref={ref}
        pointer={pointer}
        onFocus={() => { setOpen(true) }}
      />
    </Dropdown>
  );
}

