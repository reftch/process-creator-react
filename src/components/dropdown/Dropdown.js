import React, { useState } from 'react'

const Dropdown = (props) => {
  const value = props.value || '';
  const [isActive, setActive] = useState(false);
  const [original, setOriginal] = useState(value);

  const setNewValue = (value) => {
    setOriginal(value);
    props.handleInputValue(value);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const currentState = !isActive;
      setActive(currentState);
      if (!currentState) {
        setOriginal(value);
      }
    } else if (event.key === 'Escape') {
      setActive(false);
      props.handleInputValue(original);
    } else if (event.key === 'ArrowDown' && isActive) {
      for (let i = 0; i < props.options.length; i++) {
        const option = props.options[i];
        if (option.value === props.value) {
          const nextValue = i + 1 === props.options.length ? props.options[0].value : props.options[i + 1].value;
          props.handleInputValue(nextValue);
          return;
        }
      }
    } else if (event.key === 'ArrowUp' && isActive) {
      for (let i = 0; i < props.options.length; i++) {
        const option = props.options[i];
        if (option.value === props.value) {
          const nextValue = i - 1 === -1 ? props.options[props.options.length - 1].value : props.options[i - 1].value;
          props.handleInputValue(nextValue);
          return;
        }
      }
    }
  }

  const options = props.options.map((option) =>
    <span key={option.id}
      className={"dropdown-option" + (option.value === props.value ? " selected" : "")}
      onClick={() => setNewValue(option.value)}>
      {option.value}
    </span>
  );

  return (
    <div className={props.disabled ? "dropdown dropdown-disabled" : "dropdown"}
      onClick={() => setActive(!isActive)}
      onKeyDown={handleKeyPress}
      tabIndex="0" onBlur={() => setActive(false)}>
      <div className={"dropdown-select" + (isActive ? " open" : "")}>
        <div className="dropdown-select-trigger" >
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
