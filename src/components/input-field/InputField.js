import React, { useState } from 'react'

const InputField = (props) => {
  const [value] = useState(props.value || '');
  const [disabled] = useState(props.disabled);
  const [placeholder] = useState(props.placeholder || '');

  return (
    <div className="input-field">
      <div className="input-field-form-row">
        <input
          type="text"
          disabled={disabled}
          placeholder={placeholder}
          defaultValue={value}
        />
      </div>
    </div >
  )
}

export default InputField
