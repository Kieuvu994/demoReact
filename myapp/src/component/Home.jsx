import { Alert } from 'bootstrap';
import '../css/Home.css';
import React,{ useState,useEffect } from 'react';
//import {useSelector, useDispatch} from 'react-redux';
//import getApiCategory from '../store/categories';
import Api from './Api';
const Home=()=> {
  //const dispatch = useDispatch();
  //const datas = useSelector(s=>s.Categories);
  //console.log(datas)
  const [data,setdata] = useState([]);
  useEffect(() => {
    fetchData();
    // setFirstRun(false)
    // searchData(page, pageSize)
  }, [])



const fetchData = () =>{
 const  params = {
  cdTp: "SITE_CODE",
  categoryGroupNm: "SZ0000"
};
  //const datax = await dispatch(getApiCategory(params));
  Api.get("p",
   {params: params
   }).then((res)=>{
    console.log(res.data);
    setdata(res.data);
  })
}

      
    return (
      <section className="categories">
      <div className="container">
        <div className="row">
          <div className="categories__slider owl-carousel">
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                <h5><a href="#">Fresh Fruit</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                <h5><a href="#">Dried Fruit</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                <h5><a href="#">Vegetables</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                <h5><a href="#">drink fruits</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                <h5><a href="#">drink fruits</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Home