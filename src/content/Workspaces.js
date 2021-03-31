import { useState, useEffect } from 'react'
import Button from '../components/button/Button'
import Table from '../components/table/Table'

export const Workspaces = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const [workspaces, setWorkspaces] = useState([
    { name: 'Custom', type: '', projects: '3', path: '/root', selected: false },
    { name: 'Commands', type: '', projects: '2', path: '/root/commands', selected: false },
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
          behavior. <a href="#/">Learn more.</a>
      </div>

      <div className="widget">
        <div className="title">Workspaces</div>
        <div className="chart">
          <div className="form-row">
            <div className="form-row-left">
              <Button title="Add Workspace" primary="true" />
            </div>
            <div className="form-row-right">
              <Button
                title="Delete"
                primary="true"
                disabled={deleteDisabled}
              />
              {/* <p-input-field placeholder="Search" /> */}
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