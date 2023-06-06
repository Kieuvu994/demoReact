import { Component, useLayoutEffect, useEffect, useRef, useState } from "react";
import { OptionText, Text, Date } from "../common/SearchComponent";
import Api from '../../Api'
import { TextField, Box, Button, colors } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material'
import { DataGrid, GridCellModes } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
export default Orders


function Orders() {
  const [data, setData] = useState([])
  const [searchName, setSearchName] = useState('')
  const [option, setOption] = useState([])
  const [search, setSearch] = useState(
    {
      begin: '',
      end: '',
    }
  )
  useLayoutEffect(() => {
    getdata()
    console.log(search)
    console.log(data)
  }, [search, searchName])
  useEffect(() => {
    Api.get("code", {
      params: {
        CodeName: 'ord_sta',
      }
    }).then((res) => {
      console.log("typ_pro ", res.data);
      setOption(res.data.data);
    })
  }, [])
  const getdata = async () => {
    await Api.get("Order", {
      params: {
        searchBeginDate: search.begin ? search.begin : null,
        searchEndDate: search.end ? search.end : null,
        searchName: searchName,
      }
    }).then((res) => {
      setData(res.data.data);
    })
  }



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
      <div >
        <DataGrid
          pagination
          rows={data}
          columns={columns}
          getRowId={(r) => (r.id)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 100,
              },
            },
          }}
          rowHeight={30}
          headerHeight={30}
        />
      </div>


    </>
  )
}
const columns = [
  { field: 'id', headerName: 'ID', width: 80, editable: false },
  { field: 'Name', headerName: 'Name', width: 180, editable: false },
  { field: 'created', headerName: 'Date created', editable: false, width: 180, },
  {
    field: 'last_update',
    headerName: 'Date Update',

    width: 180,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'status',
    width: 120,
    editable: true,
  },
  {
    field: 'Pay',
    headerName: 'Payment',
    width: 120,
    editable: true,
  },
];
const rows = [
  {
    id: 1,
    Name: 'anhem',
    created: randomCreatedDate(),
    last_update: randomUpdatedDate(),
    status: 'aaas',
    Pay: 1222,

  },
];