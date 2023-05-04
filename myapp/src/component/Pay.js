
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from 'react';
import Api from './Api';
import {PayPalButtons, PayPalScriptProvider} from"@paypal/react-paypal-js"
export default function Pay(props) {
  const [first, setfirst] = useState(true)
  const [FName, setFName] = useState("");
  const [Addr, setAddr] = useState("");
  const [City, setCity] = useState("");
  const [Phone, setPhone] = useState("");
  const [Mail, setMail] = useState("");
  const [Note, setNote] = useState("");
  const [Sex, setSex] = useState("Nam");
  const [Status, setStatus] = useState("Waiting");
  const [Total, SetTotal] = useState(0);
  const insertuser =async ()=>{

        let bodyparam=[{
          FName: FName,
          Addr: Addr,
          City:City,
          Phone: Phone,
          Email: Mail,
          Note: Note,
          Sex: Sex, 
        }]
        await Api.post("client", {
                      "list": bodyparam,
                  }
                  ).then((e) => {
                      console.log(e)
                      localStorage.setItem("user",Phone);
                      insertoder();
                  })
      }
      const insertoder =async ()=>{
        //let bodyparam=JSON.parse(localStorage.getItem("order"))
        await Api.post("order", {
                      "Total": localStorage.getItem("Total"),
                      "Status": Status,
                      "user_login":Phone,
                  }
                  ).then((e) => {
                      console.log(e)
                  })
      }
  const dt = JSON.parse(localStorage.getItem("order"));
  const order = dt.map(
    (e)=><li>
    {e.Name} <span>${e.quality*e.price}</span>
  </li>)

  return (
    <section className="checkout spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6>
              <span className="icon_tag_alt" /> Have a coupon?{' '}
              <a href="#">Click here</a> to enter your code
            </h6>
          </div>
        </div>
        <div className="checkout__form">
          <h4>Billing Details</h4>
          <form action="#">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Full Name<span>*</span>
                      </p>
                      <input type="text" onChange={(newvalue)=>setFName(newvalue.target.value)}/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Sex <span>*</span>
                      </p>
                      <select  onChange={(newvalue)=>setSex(newvalue.target.value)}>
                      <option value='Nam'>Nam</option>
                      <option value='Nữ'>Nữ</option>
                      </select>

                      
                    </div>
                  </div>
                </div>
                <div className="checkout__input">
                  <p>
                    Address<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="checkout__input__add"
                    onChange={(newvalue)=>setAddr(newvalue.target.value)}
                  />

                </div>
                <div className="checkout__input">
                  <p>
                    Town/City<span>*</span>
                  </p>
                  <input type="text" onChange={(newvalue)=>setCity(newvalue.target.value)}/>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Phone<span>*</span>
                      </p>
                      <input type="text" onChange={(newvalue)=>setPhone(newvalue.target.value)}/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Email<span>*</span>
                      </p>
                      <input type="text" onChange={(newvalue)=>setMail(newvalue.target.value)}/>
                    </div>
                  </div>
                </div>
                <div className="checkout__input">
                  <p>
                    Order notes<span>*</span>
                  </p>
                  <input
                    type="text"
                    onChange={(newvalue)=>setNote(newvalue.target.value)}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="checkout__order">
                  <h4>Your Order</h4>
                  <div className="checkout__order__products">
                    Products <span>Total</span>
                  </div>
                  <ul>
                    {order}
                  </ul>
                  <div className="checkout__order__subtotal">
                    Subtotal <span>{localStorage.getItem("Subtotal")}</span>
                  </div>
                  <div className="checkout__order__total">
                    Total <span>{localStorage.getItem("Total")}</span>
                  </div>
                  <button type="submit" className="site-btn" onClick={insertuser}>
                    Payment on delivery
                  </button>
                  <br/>


                  <PayPalScriptProvider
                    options={{
                      "client-id": "AQ88y2UzK2lr2DQ9ukdfVx56QWiNzbB2RXRhIakVyB_pSugHky3_CZAH8cURoUuJFQzLh_kh3CUxn4aV",

                    }}
                  >
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order
                          .create({
                            purchase_units: [
                              {
                                description: "test code",//dt.reduce((nw,cur)=>nw+" - "+cur.Name,""),
                                amount: {
                                    currency_code: "USD",
                                    value: localStorage.getItem("Total"),
                                },
                              },
                            ],
                            application_context:{
                              shipping_preference: "noshiping",
                            }
                          })
                          .then((orderId) => {
                            insertuser();
                              return orderId;
                          });
                    }}
                    onApprove={ (data, actions)=> {
                      alert("completed");

                      return actions.order.capture().then(function (detail) {
                        alert("completed");

                      });
                  }}
                    
                    />
                  </PayPalScriptProvider>
                  <button type="submit" className="site-btn">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}