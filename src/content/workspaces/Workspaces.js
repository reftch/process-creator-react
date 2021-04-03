import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Button from '../../components/button/Button'
import Table from '../../components/table/Table'
import InputField from '../../components/input-field/InputField'

export const Workspaces = () => {
  const history = useHistory();
  const [search] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: 'Custom', type: 'LOCAL', projects: '3', path: '/root', selected: false },
    { id: 2, name: 'Commands', type: 'LOCAL', projects: '2', path: '/root/commands', selected: false },
  ]);

  const columns = [
    { id: 'name' },
    { id: 'type' },
    { id: 'projects' },
    { id: 'path' },
    { id: 'actions' },
  ];

  useEffect(() => {
    const selected = workspaces.find(i => i.selected);
    setDeleteDisabled(!selected);
  }, [workspaces])

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setWorkspaces(workspaces.map(w => {
      w.selected = selectAll;
      return w;
    }))
  }

  const select = (item) => {
    setWorkspaces(workspaces.map(w => {
      if (item.name === w.name) {
        w.selected = !w.selected;
      }
      return w;
    }))
  }

  return (
    <div className="form">
      <div className="title">Workspaces settings</div>
      <div className="form-description">
        <span className="form-description-icon wui-icon-help" />
          These are Process Creator's workspaces settings for the projects location behavior.
          These settings are unrelated to the process's definitions, parameters and
          behavior. <a href="https://reactjs.org/" >Learn more.</a>
      </div>

      <div className="widget">
        <div className="title">Workspaces</div>
        <div className="chart">
          <div className="form-row">
            <div className="form-row-left">
              <Button title="Add Workspace" primary="true" handleClick={() => history.push('/workspaces/edit')}/>
            </div>
            <div className="form-row-right">
              <Button
                title="Delete"
                primary="true"
                disabled={deleteDisabled}
              />
              <InputField placeholder="Search" value={search}/>
            </div>
          </div>
          <div className="form-row">
            <Table items={workspaces} columns={columns} selectAll={toggleSelectAll} select={select}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Workspaces