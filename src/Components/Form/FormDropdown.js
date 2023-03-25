import { useRef, useState } from "react";
import Form from ".";
import { mask } from "../../Store/masks";
import { generateClassName, numberNames } from "../../utils";
import Dropdown from "../Dropdown";
import useStore from "../Hooks/useStore";

export default function FormDropdown({ pointer, ...rest }) {
  const field = useStore(pointer);
  const { enum: en, state = '', icon = [], mask: m } = field;
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const control = {
    className: generateClassName('form-dropdown', pointer),
    open,
    list: en
      .map((value, index) => ({
        index,
        name: numberNames[index],
        icon: icon[index],
        value: m ? mask[m](value) : value
      }))
      .filter((item) => item.value.includes(state)),
    select: (index) => () => {
      field[pointer] = {
        type: 'setFormField',
        payload: en[index]
      }
      setOpen(false);
    },
    width: ref?.current?.offsetWidth,
    ...rest,
  }
  const fieldControl = {
    ref,
    pointer,
    onFocus: () => { setOpen(true) },
  }
  return (
    <Dropdown {...control}>
      {
        icon ? (
          <Form.FieldIcon {...fieldControl} />
        ) : (
          <Form.Field {...fieldControl} />
        )
      }
    </Dropdown >
  );
}

