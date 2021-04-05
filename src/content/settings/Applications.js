import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import InputField from '../../components/input-field/InputField'
import Table from '../../components/table/Table'

const Applications = () => {
  const [search] = useState('');
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const [selectAll, setSelectAll] = useState(false);

  const [items, setItems] = useState([
    { id: 1, address: "/creator", rootPath: "webapps/creator", selected: false },
    { id: 2, address: "/ui", rootPath: "webapps/ui", selected: false },
  ]);

  const columns = [
    { id: 'address' },
    { id: 'rootPath' },
    { id: 'actions' },
  ];

  useEffect(() => {
    const selected = items.find(i => i.selected);
    setDeleteDisabled(!selected);
  }, [items])

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setItems(items.map(i => {
      i.selected = selectAll;
      return i;
    }))
  }

  const select = (item) => {
    setItems(items.map(i => {
      if (item.address === i.address) {
        i.selected = !i.selected;
      }
      return i;
    }))
  }

  return (
    <div className="widget">
      <div className="widget-title">Static Applications</div>

      <div className="widget-chart">
          <div className="form-row">
            <div className="form-row-left">
              <Button title="Deploy" primary="true" />
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
            <Table items={items} columns={columns} selectAll={toggleSelectAll} select={select}/>
          </div>
        </div>

    </div>
  )
}

export default Applications
