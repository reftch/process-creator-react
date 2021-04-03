import React, { useState } from 'react'
import Pod from './Pod'
import Parameters from './Parameters'
import Button from '../../components/button/Button'

const EditWorkspace = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('LOCAL');

  return (
    <div className="form">
      <div className="title">Workspace</div>
      <div className="form-description">
        <span className="form-description-icon wui-icon-help" />
          These are Process Creator's workspaces settings for the projects location behavior.
          These settings are unrelated to the process's definitions, parameters and
          behavior. <a href="https://reactjs.org/" >Learn more.</a>
      </div>

      <Parameters name={name} onName={(v) => setName(v)} type={type} onType={(v) => setType(v)}/>
      <Pod />

      <Button title="Create" primary="true" handleClick={() => console.log(name, type)}/>

    </div>
  )
}

export default EditWorkspace
