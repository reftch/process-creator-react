import React, { useState } from 'react'

const InputField = (props) => {
  const [value] = useState(props.value || '');
  // const [error, setError] = useState(props.error || '');
  // const [label, setLabel] = useState(props.label || 'Label');
  const [disabled] = useState(props.disabled);
  const [placeholder] = useState(props.placeholder || '');

  return (
    <div className="input-field">
      <div className="input-field-form-row">
        <input
          type="text"
          value={value}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
    </div >
  )
}

export default InputField
