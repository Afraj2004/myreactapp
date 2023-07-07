import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'



const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'user', headerName: 'User', width: 600 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'category', headerName: 'Category', width: 600 },
  { field: 'notes', headerName: 'Notes',width: 17200 },
 
]

 const DataTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://api.gyanibooks.com/library/get_dummy_notes")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <h2>DataTable</h2>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
      />
    </div>
  )
}

export default DataTable


