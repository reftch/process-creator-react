import React from 'react'

const Checkbox = ({ value, handleClick, isPartlySelected }) => {
  return (
    <div className="checkbox" onClick={handleClick}>
      { isPartlySelected ? <i className ="bi bi-dash-square-fill"></i> :
        value ? <i className="bi bi-check-square-fill"></i> : <i className="bi bi-square"></i>}
    </div>
  )
}

export default Checkbox
