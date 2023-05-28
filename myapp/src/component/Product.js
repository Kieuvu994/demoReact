import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect , useState} from 'react';
import Api from '../Api';
import DataGridStyle from './DataGridStyle'
// Company
// Material
// Name
// id
// picture
// picture1
// price
// priceSale
// quantity

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 350,
    editable: true,
  },
  {

    field: 'Company',
    headerName: 'Company',
    width: 180,
    editable: true,
  },
  {
    field: 'Material',
    headerName: 'Material',
    width: 180,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 180,
    editable: true,
  },
  {
    field: 'priceSale',
    headerName: 'Sale',
    type: 'number',
    width: 110,
    editable: true,
  },
  
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: true,
  },

  
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Product() {
  const [data, setdata] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [count,setCount] = useState(0)
  useEffect(() => {
    console.log("API...");
    Api.get("Product", {
        params: {
          category: category,
          type: type,
        }
      }).then((res) => {
        console.log("product in ", res.data);
        setdata(res.data.data);
        setCount(res.data.count)
      })
  }, [category , type])
    

      


  return (
    <Box sx={{  width: '100%' }}>
      <DataGrid
        pagination
        paginationMode="server"
        rows={data}
        getRowId={(r) =>(r.id)}
        columns={columns}
        sx={DataGridStyle}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        rowCount={count}
        pageSizeOptions={[15,30,50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}