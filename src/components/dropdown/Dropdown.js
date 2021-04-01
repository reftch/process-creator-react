import { useState } from 'react'

const Dropdown = (props) => {
  const [value] = useState(props.value || '');
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const options = props.options.map((option) => 
    <span key={option.id} className="dropdown-option">
      {option.value}
    </span>
  );

  return (
    <div className={props.disabled ? "dropdown dropdown-disabled" : "dropdown"} onClick={handleToggle}>
      <div className={isActive ? "dropdown-select open" : "dropdown-select"}>
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
