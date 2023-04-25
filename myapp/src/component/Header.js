//import '../css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/header.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from "react";
const Header =()=> {
  const [dark, setDark] = useState(localStorage.getItem('darkTheme') != null ? localStorage.getItem('darkTheme') : false)
  useEffect(() => {
    // 
  }, [])
  //setDark(localStorage.getItem('darkTheme'));

  

  
  
    return (
        <header className={dark? "dark":"header"}>
        <div className="header__top">

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <input type="checkbox" id="darkTheme" 
                     onChange={()=> {
                      setDark(!dark);
                      localStorage.setItem('darkTheme',!dark)
                    }} 
                     defaultChecked = {dark}/>

                    <li><i className="fa fa-envelope" /> company@hcmut.edu.vn</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-pinterest" /></a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#"><i className="bi bi-person" /> Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./"><img src="img/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active"><a href="./">Home</a></li>
                  <li><a href="./detail">Category</a></li>
                  <li><a href="./pay">Pay</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li><a href="#"><i className="bi bi-heart" /> <span>1</span></a></li>
                  <li><a href="#"><i className="bi bi-bag" /> <span>3</span></a></li>
                </ul>
                <div className="header__cart__price">item: <span>$150.00</span></div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
      
      
    )
}
export default Header