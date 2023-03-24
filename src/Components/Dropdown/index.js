export default function Dropdown({ children, className, list }) {
  return (
    <div className={`dropdown ${className}`}>
      {children}
      <ul className={`dropdown-list`}>
        {list.map(({ name, value }) =>
          <li
            className={`dropdown-list-item dropdown-list-item-${name}`}
          >
            <a>{value}</a>
          </li>
        )}
      </ul>
    </div>
  )
}
