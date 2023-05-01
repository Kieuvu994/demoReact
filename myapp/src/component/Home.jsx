import { Alert } from 'bootstrap';
import '../css/Home.css';
import React, { useState, useEffect } from 'react';

//import {useSelector, useDispatch} from 'react-redux';
//import getApiCategory from '../store/categories';
import Api from './Api';
const Home = () => {
  const [first,setfirst] =useState(true)
  const [data, setdata] = useState([]);
  const [handLeft, sethandLeft] = useState(false);
  const [cate, setcate] = useState("");
  const [cateid, setcateid] = useState("");
  const [catetyp, setcatetyp] = useState("");

  const handleClick = () => {
    handLeft ? sethandLeft(false) : sethandLeft(true);
  }
  useEffect(() => {
    
    if(first) {
      fetchData();
      // localStorage.setItem("cate_type","");
      // localStorage.setItem("cate_id","");
      // localStorage.setItem("cate_search","");
    }
    else setfirst(false)
    // setFirstRun(false)
    // searchData(page, pageSize)
  }, [])
  useEffect(() => {
    !first && fetchData()
  }, [cate,cateid,catetyp])



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
    var cur = localStorage.getItem("CategoryData")?[]:
    JSON.parse(localStorage.getItem("CategoryData"))
    ;
    cur = cur +" "+ e+':S';
    // if (cur == null) cur = [cate]; 
    // else cur.push(cate);
    //else cate.push();
    localStorage.setItem("CategoryData",cur);
    

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
                    <a href="#">
                      <i className="bi bi-heart" />
                    </a>
                  </li>
                  <li>
                    <a href="./" onClick={()=>{saveCategory(e.id)}}>
                      <i className="bi bi-cart"  />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="./detail" onClick={()=>{localStorage.setItem("category_id",e.id)}}>{e.Name}</a>
                </h6>
                <h5>${e.priceSale}</h5>
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
              <h2>Featured Product</h2>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {item}
          <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div className="featured__item">
              <div
                className="featured__item__pic set-bg"
                style={{ backgroundImage: "url(img/featured/feature-1.jpg)" }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i className="bi bi-heart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-cart" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default Home