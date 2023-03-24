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
        {list.map(({ index, name, value }) =>
          <li
            key={index}
            className={`dropdown-list-item dropdown-list-item-${name}`}
            onClick={() => { select(index) }}
          >
            {value}
          </li>
        )}
      </ul>
    </div>
  )
}
