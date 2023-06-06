import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState, useRef ,useLayoutEffect } from 'react';
import Api from '../../Api';
import { TextField, Box, Button, colors } from '@mui/material';
import ProductInsert from './ProductInsert'
import ProductUpdate from './ProductUpdate'
import Message from '../AlertDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import {Add} from '@mui/icons-material'

export default function Product() {
  const [data, setdata] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [count, setCount] = useState(0)
  const [option, setOption] = useState([])
  const [page, setpage] = useState(0)
  const [Delete, setDelete] = useState([])

  useLayoutEffect(() => {
    console.log("API...");
    searchData()
  }, [category, type, page])

  useEffect(() => {
    Api.get("code", {
      params: {
        CodeName: 'typ_pro',
      }
    }).then((res) => {
      console.log("typ_pro ", res.data);
      setOption(res.data.data);
    })
    // searchData()
  }, [])

  const searchData = async () => {
    await Api.get("Product", {
      params: {
        category: category,
        type: type,
      }
    })
    .then((res) => {
      setdata(res.data.data)
      setCount(res.data.count)
    })
    .catch(
      (e)=>console.error(e)
    )
    .finally(
      console.log("product in ", data)
    )
  }
  const AlertDialog1 = useRef();
  const documentDetailsRef = useRef();
  const childRef = useRef();

  // const childRef = useRef(); 
  return (
    <>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: 'block' }}>
          <TextField
            id="standard-select-currency-native"
            select
            defaultValue={type}
            onChange={(newValue) => setType(newValue.target.value)}
            SelectProps={{
              native: true,
            }}
            helperText="Please select Type Product"
            variant="standard"
          >
            <option value="">None</option>
            {option?.map((op) => (
              <option key={op.code} value={op.code}>
                {op.param_meaning}
              </option>
            ))}
          </TextField>
          <TextField
            label="Search"
            id="standard-start-adornment"
            defaultValue={category}
            helperText="Please select Type Product"
            onChange={(newValue) => setCategory(newValue.target.value)}
            InputProps={{
              'aria-label': 'weight',
            }}
            variant="standard"
          />
          <div style={{ display: 'flex', height: '50px' }}>
            <Button color='primary' style={{ display: 'inline', height: '40px', width: '40px', }}
              onClick={() => childRef.current.handleClickOpen()}>
                <Add color={'secondary'}/>
            </Button>

            <Button   style={{ display: Delete.length>0?'inline':'none', height: '40px', width: '30px', marginLeft: '10px',title:'Delete' }}
              onClick={() => AlertDialog1.current.handleClickOpen({title:'Are you Sure?',Service: 'Product', list: Delete})}
              disabled={Delete.length<1}
              >
                <DeleteIcon color={'secondary'}/>  
            </Button>


          </div>
        </div>
      </Box>
      {/* Message */}
      <Message ref={AlertDialog1} onUpdated={()=>setpage(1 - page)} />
      <ProductInsert ref={childRef} onUpdated={() => setpage(1 - page)} />
      <ProductUpdate ref={documentDetailsRef} onUpdated={() => setpage(1 - page)} />
        <DataGrid
          pagination
          rows={data}
          rowCount={count}
          getRowId={(r) => (r.id)}
          columns={columns}
          // sx={DataGridStyle}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            console.log(newRowSelectionModel);
            setDelete(newRowSelectionModel)
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 100,
              },
            },
          }}
          // page={1}
          rowHeight={30}
          headerHeight={30}
          pageSizeOptions={[15, 50, 100, 500]}
          checkboxSelection
          onRowDoubleClick={e => documentDetailsRef.current.openDialog(e.row)}
  
        />

    </>
  );
}
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 300,
    //editable: true,
  },
  {

    field: 'Company',
    headerName: 'Company',
    width: 150,
    // editable: true,
  },
  {
    field: 'Material',
    headerName: 'Material',
    width: 150,
    //editable: true,
  },
  {
    field: 'pricePur',
    headerName: 'Purchase Price',
    width: 110,
    type: 'number',
    // editable: true,
  },
  {
    field: 'price',
    headerName: 'Init Price',
    width: 110,

  },

  {
    field: 'priceSale',
    headerName: 'Discount Price',
    type: 'number',
    width: 110,

  },

  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,

  },
];

