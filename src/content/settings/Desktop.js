import { useState } from 'react'
import Button from '../../components/button/Button'
import Dropdown from '../../components/dropdown/Dropdown'

const Desktop = () => {
  const [theme, setTheme] = useState('Light Theme');
  const themes = [
    { id: 1, value: 'Light Theme' },
    { id: 2, value: 'Dark Theme' },
  ];

  const [lang, setLanguage] = useState('English');
  const languages = [
    { id: 1, value: 'English' },
    { id: 2, value: 'German' },
    { id: 3, value: 'French' },
  ];

  const setNewTheme = (theme) => {
    setTheme(theme);
  }

  const setNewLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className="widget">
      <div className="title">Desktop</div>
      <div className="chart form-inline">
        <div className="row-col-40">
          <label className="form-label">Appearance</label>
          <div className="form-hint">Current application color's theme.</div>
          <Dropdown options={themes} value={theme} handleInputValue={setNewTheme} />
        </div>

        <div className="row-col-50">
          <label className="form-label">Language</label>
          <div className="form-hint">
            All elements, labels, tooltips and toaster messages will appear on
            this language.
      </div>
          <Dropdown options={languages} value={lang} handleInputValue={setNewLanguage} />
        </div>
        <span style={{ paddingTop: "20px" }}>
          <Button title="Add Theme" primary={true} />
        </span>
      </div>
    </div>
  )
}

export default Desktop
