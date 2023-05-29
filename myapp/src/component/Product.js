import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect , useState , useRef} from 'react';
import Api from '../Api';
import DataGridStyle from './DataGridStyle'
import { Clear, Height } from "@mui/icons-material";
import {Input, InputAdornment ,TextField, Box, FormControl, FormHelperText, FilledInput  , Button} from '@mui/material';
import Product_02 from './Product_02'
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
    width: 300,
    editable: true,
  },
  {

    field: 'Company',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'Material',
    headerName: 'Material',
    width: 150,
    editable: true,
  },
  {
    field: 'pricePur',
    headerName: 'Purchase Price',
    width: 110,
    type: 'number',
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Init Price',
    width: 110,
    editable: true,
  },
  
  {
    field: 'priceSale',
    headerName: 'Discount Price',
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

export default function Product() {
  const [data, setdata] = useState([]);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [count,setCount] = useState(0)
  const [option,setOption] =useState([])
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
  useEffect(() => {
    console.log("API option...");
    Api.get("code", {
        params: {
            CodeName: 'typ_pro',
        }
      }).then((res) => {
        console.log("op in ", res.data);
        setOption(res.data.data);
      })
  }, [])
      
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
      <div style={{display:'block'}}>
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
          {option.map((op) => (
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
           <Button  variant='contained' color='primary' style={{display:'block', height:'40px', width:'40px'}}
            onClick={() => childRef.current.handleClickOpen()}>Add
         </Button>
      </div>
    </Box>    
 
    <Product_02 ref={childRef}/>                        

 <Box sx={{  width: '100%' }}>
      <DataGrid
        pagination
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
        //rowCount={count}
        pageSizeOptions={[15,30,50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
   </> 
  );
}


// Name: Name,
//         Company: Company,
//         price_in: price_in,
//         price_out: price_out,
//         price_sale: price_sale,
//         type: type,
//         desc: desc,
//         content: content,
//         picture: picture,
//         picture1: picture1,
//         Material: Material,
//         quantity: quantity,