import { useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import InputField from '../../components/input-field/InputField'
import Table from '../../components/table/Table'

const Containers = () => {
  const [search] = useState('');
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const [selectAll, setSelectAll] = useState(false);

  const [items, setItems] = useState([
    { id: 1, address: "dockerreg.somecompany.com", username: "Taras Chornyi", selected: false },
  ]);

  const columns = [
    { id: 'address' },
    { id: 'username' },
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
      <div className="title">Container Registries</div>

      <div className="chart">
          <div className="form-row">
            <div className="form-row-left">
              <Button title="Add Registry" primary="true" />
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

export default Containers
