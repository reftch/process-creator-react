import React from 'react'
import Desktop from './Desktop'
import Applications from './Applications'
import Containers from './Containers'

const Settings = () => {

  return (
    <div className="form">
      <div className="title">Settings</div>
      <div className="form-description">
        <span className="form-description-icon wui-icon-help" />
          These settings are related to the desktop looks like, choose color themes
          and language.
      </div>

      <Desktop/>
      <Applications/>
      <Containers/>

    </div>
  )
}

export default Settings
