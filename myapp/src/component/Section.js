//import '../css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import '../css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React,{ useState,useEffect } from 'react';
import Api from './Api'
const Section = () => {
  const [first,setfirst] =useState(true);
  const [data,setdata] = useState([{}]);
  useEffect(() => {
    first?fetchData(): setfirst(false);
  }, [])

  const [handLeft,sethandLeft] = useState(false);
  const handleClick = () =>{
    handLeft? sethandLeft(false): sethandLeft(true);
  }

  const fetchData = () =>{
    const  params = {
     CodeName: "typ_pro",
   };
     Api.get("code",
      {params: params
      }).then((res)=>{
       console.log("code ",res.data.data[1].param_meaning);
       setdata(res.data.data);
     })
   }
   
   const left = data.map((e)=> <li><a href="./" onClick={()=>{
    localStorage.setItem("cate_type",e.code)
    localStorage.setItem("type_name",e.param_meaning)
  }}>{e.param_meaning}</a></li>);

    return (
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all"  onClick={handleClick}>
                  <i className="bi bi-grid-3x3-gap-fill" />
                  <span></span>
                </div>
                <ul style={{display: handLeft?'block':'none'}}>
                <li><a href="./" onClick={()=>{
                  localStorage.setItem("cate_type","");
                  localStorage.setItem("cate_id","");
                  localStorage.setItem("cate_search","");
                  localStorage.setItem("type_name","");
                  }}>View All</a></li>
                  { left}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">SEARCH</button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="bi bi-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Section