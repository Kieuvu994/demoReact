import { Alert } from 'bootstrap';
import './home.css';
import React,{ useState,useEffect } from 'react';
import {useSelector} from 'react-redux';
import Api from './Api';
const Home=()=> {
  const data = useSelector(s=>s.Home.data);
  
  useEffect(() => {
    fetchData();
    // setFirstRun(false)
    // searchData(page, pageSize)
  }, [])



const fetchData = () =>{
  Api.get("p",{
    params:{
      cdTp: "SITE_CODE",
      categoryGroupNm: "SZ0000"
    },
  }).then((res)=>{
    console.log(res.data);
    data(res.data);
  })
}

      
    return (
        <>
  <h1>aaa</h1>
        
        </>
    )
}
export default Home