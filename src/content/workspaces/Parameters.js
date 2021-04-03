import React from 'react'
import InputField from '../../components/input-field/InputField'
import Dropdown from '../../components/dropdown/Dropdown'

const Parameters = (props) => {
  const name = props.name || '';
  const type = props.type || '';
  const types = [
    { id: 1, value: "LOCAL" },
    { id: 2, value: "DISTRIBUTION"}
  ];

  return (
    <div className="widget">
      <div className="title">Parameters</div>
         
      <div className="chart form-inline">
        <div className="row-col-50">
          <label className="form-label">Workspace Name *</label>
          <div className="form-hint">
            Each workspace should have an unique name.
          </div>
          <div className="view-settings-form-row">
            <InputField value={name} placeholder="New Workspace" onChange={(e) => props.onName(e.target.value)}/>
          </div>
        </div>

        <div className="row-col-30">
          <label className="form-label">Type *</label>
          <div className="form-hint" style={{ minWidth: "300px" }}>
            Please choose a type.
          </div>
          <div className="view-settings-form-row">
            <Dropdown options={types} value={type} handleInputValue={(type) => props.onType(type)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parameters
