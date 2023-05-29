import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect , useState} from 'react';
import Api from '../Api';
import DataGridStyle from './DataGridStyle'
import { Clear } from "@material-ui/icons";
import {IconButton, MenuItem ,TextField, Box, FormControl, InputLabel, NativeSelect, FormHelperText, Select} from '@mui/material';

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
    
  const filterBox = (
    <>
        <Box
            component="form"
            sx={{
                p: 2,
                border: 1,
                borderColor: "rgba(192,192,192,0.2)",
                backgroundColor: "rgb(241,241,241)",
                display: 'flex',
                justifyContent: "stretch",
                alignItems: 'center',
                borderRadius: 2,
                height: 50,
            }}
            noValidate
            autoComplete="off"
         >
            <TextField
                value={type}
                id="SearchSite"
                select
                label="Site"
                defaultValue="all"
                style={{ width: 130 }}
                onChange={(newValue) => setType(newValue.target.value)}
                size="small"
                sx={{
                    marginRight: 2,
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    height:"37px"
                },
                }}
            >
                <MenuItem value="all">All</MenuItem>
                {option.map(field => {
                return (
                    <MenuItem key={field.code} value={field.code}>{field.param_meaning}</MenuItem>
                )
                })}
            </TextField>
            <TextField
                sx={{
                marginRight: 2,
                input: {
                    color: "black",
                    background: "white",
                    height:"20px"
                },
                }}
                label="Table Name/Desc"
                id="dataSearch"
                size="small"
                value={category}
                style={{ width: 200, backgroundColor:'white' }}
                onChange={(newValue) => setCategory(newValue.target.value)}
                InputProps={{
                endAdornment: (
                    <IconButton
                        style={{background: "white"}}
                        color="default"
                        size="small"
                        sx={{ visibility: category ? "visible" : "hidden" }}
                        onClick={()=>setCategory("")}
                    >
                        <Clear fontSize="small"/>
                    </IconButton>
                ),
                }}
            />
            {/* <M990100030_03 ref={documentDetailsRef} onUpdated={searchData}/>
            <M990101010DownFileDialog ref={downFileDialogRef} /> */}
        </Box>
    </>
);
      

// const childRef = useRef(); 
  return (
 <>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={type}
          label="Age"
          onChange={(newValue) => setType(newValue.target.value)}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
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
   </> 
  );
}