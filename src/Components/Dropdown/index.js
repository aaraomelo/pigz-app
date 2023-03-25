import { Fragment } from 'react';
import SVG from '../SVG';
import './Dropdown.css';

export default function Dropdown({
  children,
  className,
  list,
  open,
  select,
  width,
}) {
  return (
    <div className={`dropdown ${className}`}>
      {children}
      <ul
        className={`dropdown-list dropdown-list-${open ? 'open' : 'close'}`}
        style={{ width }}
      >
        {list.map(({ index, name, value, icon }) => {
          const Icon = !icon ? Fragment : icon
            .split('.')
            .reduce((acc, acv) => acc[acv], SVG);
          return (
            <li
              key={index}
              className={'dropdown-list-item'}
              onClick={select(index)}
            >
              <Icon />
              {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
