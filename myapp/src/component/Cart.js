
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from 'react';
import Api from './Api'
export default function Pay(props) {

  const [first, setfirst] = useState(true)
  const [data, setdata] = useState([]);
  const [total, settotal] = useState(0);
  const list = JSON.parse(localStorage.getItem("CategoryData"))
  console.log("CategoryData ", list)

  useEffect(() => {

    if (first) {
      fetchData();
    }
    else setfirst(false)
  }, [])



  const fetchData = async () => {

    var listID = list.reduce((total, curvalue) => total + "," + curvalue.id, "");

    //list.forEach(e => {listID += ','+e.id;});

    const params = { list: listID };
    await Api.get("product", {
      params: params
    }).then((res) => {
      console.log("product in ", res.data.data);
      setdata(res.data.data);
    })
  }
  const order = list.map(
    (e, index) =>
      <tr>
        {/* {setva(e.quality)} */}
        <td className="shoping__cart__item">
          <img src={e.picture ? e.picture : "img/cart/cart-1.jpg"} alt />
          <h5>{e.Name}</h5>
        </td>
        <td className="shoping__cart__price">${e.price}</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">
              <input type="int" value={e.quality} />
              {/* <span className="dec qtybtn" onClick={()=>{list[index].quality}}>+</span> */}
            </div>
          </div>
        </td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">
              <input type="int" value={e.size} />
            </div>
          </div>
        </td>
        <td className="shoping__cart__total">${e.price * e.quality}</td>
        <td className="shoping__cart__item__close">
          <span className="icon_close" />
        </td>
      </tr>
  );
  var SumTotal = 0;
  list.forEach(element => {
    SumTotal += element.quality * element.price;
  });


  return (
    <section className="shoping-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th className="shoping__product">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Size</th>
                    <th>Total</th>

                    <th />
                  </tr>
                </thead>
                <tbody>
                  {order}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__btns">
              <a href="#" className="primary-btn cart-btn">
                CONTINUE SHOPPING
              </a>
              <a href="#" className="primary-btn cart-btn cart-btn-right">
                <span className="icon_loading" />
                Upadate Cart
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shoping__continue">
              <div className="shoping__discount">
                <h5>Discount Codes</h5>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    APPLY COUPON
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shoping__checkout">
              <h5>Cart Total</h5>
              <ul>
                <li>
                  Subtotal <span>${SumTotal}</span>
                </li>
                <li>
                  Total <span>${SumTotal}</span>
                </li>
              </ul>
              <a href="./pay" className="primary-btn" onClick={()=>{
                localStorage.setItem("order",JSON.stringify(list));
                localStorage.setItem("Subtotal",SumTotal);
                localStorage.setItem("Total",SumTotal);
                          }}  >
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}