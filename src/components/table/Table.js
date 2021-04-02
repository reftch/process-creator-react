import { useState, useEffect } from 'react';
import Checkbox from '../checkbox/Checkbox';

const Table = ({ items, columns, selectAll, select }) => {
  const [allSelected, setAllSelected] = useState(false);
  const [partiallySelected, setPartiallySelected] = useState(false);

  useEffect(() => {
    const selected = items.filter(i => i.selected);
    setAllSelected(selected.length === items.length);
    setPartiallySelected(selected.length > 0 && selected.length !== items.length);
  }, [items])
 
  const headers = columns.map((column) => 
    <div key={column.id} className="table-cell table-header">
      {column.id}
    </div>  
  );
 
  const rows = items.map((item) => 
    <div key={item.id} className="table-row" onClick={() => select(item)}>
      <div className="table-cell">
        <Checkbox value={item.selected}></Checkbox>
      </div>
      { columns.map((column) => 
        <div key={column.id} className="table-cell">
          {item[column.id]}
        </div> 
      )}
    </div>
  );

  return (
    <div className="table">
      <div className="table-heading">
      <div className="table-cell">
        <Checkbox value={allSelected} handleClick={selectAll} isPartlySelected={partiallySelected}></Checkbox>
      </div>
      {headers}
      </div>
      {rows}
    </div>
  )
}

export default Table
