import { Alert } from 'bootstrap';
//import '../css/style.css';
import React, { useState, useEffect } from 'react';

//import {useSelector, useDispatch} from 'react-redux';
//import getApiCategory from '../store/categories';
import Api from './Api';
const Home = () => {
  const [first,setfirst] =useState(true)
  const [data, setdata] = useState([]);
  useEffect(() => {
    
    if(first) {
      fetchData();

    }
    else setfirst(false)

  }, [])




  const fetchData = async () => {
    const params = {
      category: localStorage.getItem("cate_search")
      , category_id: localStorage.getItem("cate_id")
      , type: localStorage.getItem("cate_type")//catetyp
    };
    //const datax = await dispatch(getApiCategory(params));
    await Api.get("product",
      {
        params: params
      }).then((res) => {
        console.log("product ", res.data.data);
        setdata(res.data.data);
      })
  }

  function saveCategory(e){
    let cur = localStorage.getItem("CategoryData")? JSON.parse(localStorage.getItem("CategoryData")): [];
    let stu = {
      id:       e.id
      ,size:    'S'
      ,quality: '1'
      ,price:   e.priceSale
      ,picture: e.picture
      ,Name:    e.Name
    };
    console.log("stu",stu);

    cur.push(stu);
    // if (cur == null) cur = [cate]; 
    // else cur.push(cate);
    //else cate.push();
    localStorage.setItem("CategoryData",JSON.stringify(cur));
    

  }
  var cur = localStorage.getItem("CategoryData");
  console.log(cur)

const item = data.map((e)=> (

  <div className="col-lg-3 col-md-4 col-sm-6 mix ">
            <div className="featured__item">
              <div
                className="featured__item__pic set-bg"
                style={image(e.picture)}

              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="./detail" onClick={()=>{localStorage.setItem("category_id",e.id)}}>
                      <i className="bi bi-heart" />
                    </a>
                  </li>
                  <li>
                    <a href="./" onClick={()=>{saveCategory(e)}}>
                      <i className="bi bi-cart"  />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="./detail" onClick={()=>{localStorage.setItem("category_id",e.id)}}>{e.Name}</a>
                </h6>
                <p className="text-decoration-line-through">${e.price}</p>
                <h4>${e.priceSale}</h4>
                
              </div>
            </div>
          </div>)
);
function image(e){
  let imag = "url(img/featured/feature-1.jpg)";
  if(e!=null) imag="url("+e+")";
  return {backgroundImage : imag}
}

  return (
    
  <>

    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>View Product {localStorage.getItem("type_name")}
                  {localStorage.getItem("cate_search")}</h2>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {item}
          
        </div>
      </div>
    </section>
  </>
  )
}
export default Home