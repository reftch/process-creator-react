import React from 'react'
import Desktop from './settings/Desktop'
import Applications from './settings/Applications'
import Containers from './settings/Containers'

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
