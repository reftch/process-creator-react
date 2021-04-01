import React, { useState } from 'react'
import Button from '../components/button/Button'
import Dropdown from '../components/dropdown/Dropdown'

const Settings = () => {
  const [theme] = useState('Light Theme');
  const [themes] = useState([
    { id: 1, value: 'Light Theme' },
    { id: 2, value: 'Dark Theme' },
  ]);

  const [lang] = useState('English');
  const [languages] = useState([
    { id: 1, value: 'English' },
    { id: 2, value: 'German' },
    { id: 3, value: 'French' },
  ]);

  return (
    <div className="form">
      <div className="title">Settings</div>
      <div className="form-description">
        <span className="form-description-icon wui-icon-help" />
          These settings are related to the desktop looks like, choose color themes
          and language.
      </div>

      <div className="widget">
        <div className="title">Desktop</div>
        <div className="chart form-inline">
          <div className="row-col-40">
            <label className="form-label">Appearance</label>
            <div className="form-hint">Current application color's theme.</div>
            <Dropdown options={themes} value={theme} />
          </div>

          <div className="row-col-50">
            <label className="form-label">Language</label>
            <div className="form-hint">
              All elements, labels, tooltips and toaster messages will appear on
              this language.
          </div>
            <Dropdown options={languages} value={lang} />
          </div>
          <span style={{ paddingTop: "20px" }}>
            <Button title="Add Theme" primary={true} />
          </span>
        </div>
      </div>

    </div>
  )
}

export default Settings
