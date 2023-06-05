import { Component, useEffect, useRef, useState } from "react";
import { OptionText, Text, Date } from "../common/SearchComponent";
import Api from '../../Api'
import { FormatAlignJustify, FormatAlignJustifyTwoTone } from "@mui/icons-material";
import { TextField, Box, Button, colors } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material'
import { DataGrid, GridCellModes } from '@mui/x-data-grid';

export default Orders


function Orders() {
  const [data, setData] = useState()
  const [searchName, setSearchName] = useState('')
  const [search, setSearch] = useState(
    {
      begin: '',
      end: '',
    }
  )
  useEffect(() => {
    getdata()
    console.log(search)
    console.log(data)
  }, [search, searchName])
  useEffect(() => {
    Api.get('Order',{
      params: {
        searchBeginDate: search.begin,
        searchEndDate: search.end,
        searchName: searchName,
      }
    }).then((res) => {
      setData(res.data.data);
      
    })
    console.log(search)
    console.log(data)
  }, [])
  const getdata =()=>{ Api.get('Order',{
    params: {
      searchBeginDate: search.begin,
      searchEndDate: search.end,
      searchName: searchName,
    }
  }).then((res) => {
    setData(res.data.data);
    
  })}
  return (
    <>

      <div className="Search">
        <div className="searchLeft">
          <div className="searchItem">
            <Date
              defaultValue={search.begin}
              helperText="Search date From"
              onChange={(newValue) => setSearch({ ...search, begin: newValue.target.value })}
            />
          </div>
          <div className="searchItem">
            <Date
              defaultValue={search.end}
              helperText="Search date To"
              onChange={(newValue) => setSearch({ ...search, end: newValue.target.value })}
            />
          </div>
          <div className="searchItem">
            <Text
              defaultValue={searchName}
              helperText='Please typing Name Customer'
              onChange={(newValue) => setSearchName(newValue.target.value)}
            />
          </div>
        </div>
        <div className="ActionRight">
        </div>
      </div>
      <div style={{ display: 'flex', height: '50px' }}>
        <Button color='primary' style={{ display: 'inline', height: '40px', width: '40px', }}
        >
          <Add color={'secondary'} />
        </Button>

        <Button style={{ display: 'inline', height: '40px', width: '30px', marginLeft: '10px', title: 'Delete' }}
        >
          <DeleteIcon color={'secondary'} />
        </Button>
      </div>
      <div>
      <DataGrid
        rows={data}
        columns={columns}
      />
      </div>


    </>
  )
}
const columns = [
  { field: 'id', headerName: 'ID', width: 180, editable: false },
  { field: 'Name', headerName: 'Name', width: 180, editable: false },
  { field: 'created', headerName: 'Date created', type: 'date', editable: false,width: 180, },
  {
    field: 'last_update',
    headerName: 'Date Update',
    type: 'date',
    width: 180,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'status',
    width: 220,
    editable: true,
  },
  {
    field: 'Pay',
    headerName: 'Payment',
    width: 220,
    editable: true,
  },
];
