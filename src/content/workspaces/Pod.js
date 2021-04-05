import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'

const Pod = () => {
  const [database, setDatabase] = useState('MariaDB');
  const databases = [
    { id: 1, value: "MariaDB" }, 
    { id: 2, value: "MySQL" }, 
    { id: 3, value: "Oracle" },
    { id: 4, value: "MSSQL" }
  ];
  const [app, setApp] = useState('4.0.0');
  const apps = [
    { id: 1, value: "4.0.0" }, 
    { id: 2, value: "4.1.0" }, 
    { id: 3, value: "4.2.0" },
    { id: 4, value: "4.3.0" }
  ];
  const [ui, setUI] = useState('1.1.0');
  const uis = [
    { id: 1, value: "1.0.0" }, 
    { id: 2, value: "1.1.0" }, 
    { id: 3, value: "1.2.0" },
    { id: 4, value: "1.3.0" }
  ];
  const [server, setServer] = useState('1.7.0');
  const servers = [
    { id: 1, value: "1.5.0" }, 
    { id: 2, value: "1.6.0" }, 
    { id: 3, value: "1.7.0" },
    { id: 4, value: "1.8.0" }
  ];

  return (
    <div className="widget">
      <div className="widget-title">Pod</div>

      <div className="widget-chart form-inline">

        <div className="row-col-25">
          <label className="form-label">Database *</label>
          <div className="form-hint" style={{ minWidth: "300px" }}>
            Please choose a database.
          </div>
          <div className="view-settings-form-row">
            <Dropdown options={databases} value={database} handleInputValue={(value) => setDatabase(value)} />
          </div>
        </div>

        <div className="row-col-25">
          <label className="form-label">Backend Version *</label>
          <div className="form-hint" style={{ minWidth: "300px" }}>
            Please choose a version.
          </div>
          <div className="view-settings-form-row">
            <Dropdown options={apps} value={app} handleInputValue={(value) => setApp(value)} />
          </div>
        </div>

        <div className="row-col-25">
          <label className="form-label">UI *</label>
          <div className="form-hint" style={{ minWidth: "300px" }}>
            Please choose a version.
          </div>
          <div className="view-settings-form-row">
            <Dropdown options={uis} value={ui} handleInputValue={(value) => setUI(value)} />
          </div>
        </div>

        <div className="row-col-25">
          <label className="form-label">Authentication Server *</label>
          <div className="form-hint" style={{ minWidth: "300px" }}>
            Please choose a version.
          </div>
          <div className="view-settings-form-row">
            <Dropdown options={servers} value={server} handleInputValue={(value) => setServer(value)} />
          </div>
        </div>

      </div>    
    </div>
  )
}

export default Pod
