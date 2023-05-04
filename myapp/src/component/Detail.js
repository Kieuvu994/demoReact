
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React,{ useState,useEffect } from 'react';
import Api from './Api'

export default function Detail(props) {
  const [first,setfirst] =useState(true)
  const [data, setdata] = useState([]);
  const [size, setsize ]= useState("S");
  const [Sizes,setSizes] = useState([]);
  const [quality, setquality] = useState(1);
  useEffect(() => {
    
    if(first) {
      fetchData();
    }
    else setfirst(false)
  }, [])




  const fetchData = async () => {
    const params = {
      category_id: localStorage.getItem("category_id")
    };
    //const datax = await dispatch(getApiCategory(params));
    await Api.get("product",
      {
        params: params
      }).then((res) => {
        console.log("product 0 ", res.data.data[0]);
        setdata(res.data.data[0]);
      })
     
    await Api.get("code",
          {params: {
            CodeName: "size_pro",
          }
          }).then((res)=>{
           console.log("code size",res.data.data);
           setSizes(res.data.data);
         })
  }
  const sizelist = Sizes.map((e)=>
    <option value={e.code}>{e.code}</option>
    );

    function saveCategory(){
      let cur = localStorage.getItem("CategoryData")? JSON.parse(localStorage.getItem("CategoryData")): [];
      let stu = {
        id:data.id
        ,size:size
        ,quality:quality
        ,price:   data.priceSale
        ,picture: data.picture
        ,Name:    data.Name
      };
      console.log("stu",stu);

      cur.push(stu);
      // if (cur == null) cur = [cate]; 
      // else cur.push(cate);
      //else cate.push();
      localStorage.setItem("CategoryData",JSON.stringify(cur));
      
  
    }

    return (

          <section className="product-details spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="product__details__pic">
                    <div className="product__details__pic__item">
                      <img
                        className="product__details__pic__item--large"
                        src={data.picture? data.picture: "img/product/details/product-details-1.jpg"}
                        alt
                      />
                    </div>
                    <div className="product__details__pic__slider owl-carousel">
                      <img
                        data-imgbigurl="img/product/details/product-details-2.jpg"
                        src={data.picture1? data.picture1: data.picture? data.picture: "img/product/details/thumb-1.jpg"}
                        alt
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="product__details__text">
                    <h3>{data.Name}</h3>
                    <div className="product__details__rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                      
                    </div>
                    <div className="product__details__price">${data.priceSale}</div>
                    <p className="text-decoration-line-through">${data.price}</p>
                    <p>
                      {data.desc}
                    </p>
                    <b className="d-block"> Size: 
                      <select className="arrow_carrot" onChange={(newvalue)=>setsize(newvalue.target.value)}>
                        {sizelist}
                      </select>
                    </b>

                    <div className="product__details__quantity">
                      <div className="quantity">
                        <div className="pro-qty">
                          <span className="dec qtybtn" onClick={()=>{quality>1? setquality(quality-1):setquality(1)}}>-</span>
                        <input type="int" className="is-valid " value={quality} onChange={(newvalue) => setquality(newvalue.target.value)}/>
                        <span className="dec qtybtn" onClick={()=>{setquality(quality+1)}}>+</span>
                        </div>
                      </div>
                    </div>
                    <a href="./cart" className="primary-btn"
                    onClick={saveCategory}
                    >
                      ADD TO CARD
                    </a>
                    <a href="#" className="heart-icon">
                      <span className="icon_heart_alt" />
                    </a>
                    <ul>
                      <li>
                        <b>Share on</b>
                        <div className="share">
                          <a href="#">
                            <i className="bi bi-facebook" />
                          </a>
                          <a href="#">
                            <i className="bi bi-twitter" />
                          </a>
                          <a href="#">
                            <i className="bi bi-instagram" />
                          </a>
                          <a href="#">
                            <i className="bi bi-pinterest" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product__details__tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs-1"
                          role="tab"
                          aria-selected="true"
                        >
                          Description
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <div className="product__details__tab__desc">
                          <h6>Products Infomation</h6>
                          <p>
                           {data.content}
                          
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
    )
}