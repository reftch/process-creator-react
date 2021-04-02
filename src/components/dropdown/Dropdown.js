import { useState } from 'react'

const Dropdown = (props) => {
  const value = props.value || '';
  const [isActive, setActive] = useState(false);

  const options = props.options.map((option) =>
    <span key={option.id} 
      className={"dropdown-option" + (option.value === props.value ? " selected" : "")}
      onClick={() => props.handleInputValue(option.value)}>
      {option.value}
    </span>
  );

  return (
    <div className={props.disabled ? "dropdown dropdown-disabled" : "dropdown"} onClick={() => setActive(!isActive)}>
      <div className={"dropdown-select" + (isActive ? " open" : "")}>
        <div className="dropdown-select-trigger">
          <span>{value}</span>
          <div className="dropdown-arrow open"></div>
        </div>
        <div className="dropdown-options">
          {options}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
