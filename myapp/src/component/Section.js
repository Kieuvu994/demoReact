//import '../css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React,{ useState,useEffect } from 'react';
const Section = () => {
  useEffect(() => {
  }, [])

const [handLeft,sethandLeft] = useState(true);
const handleClick = () =>{
  handLeft? sethandLeft(false): sethandLeft(true);
  }
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all"  onClick={handleClick}>
                  <i className="bi bi-grid-3x3-gap-fill" />
                  <span>All departments</span>
                </div>
                <ul style={{display: handLeft?'block':'none'}}>
                  <li><a href="#">Fresh Meat</a></li>
                  <li><a href="#">Vegetables</a></li>
                  <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                  <li><a href="#">Fresh Berries</a></li>
                  <li><a href="#">Ocean Foods</a></li>
                  <li><a href="#">Butter &amp; Eggs</a></li>
                  <li><a href="#">Fastfood</a></li>
                  <li><a href="#">Fresh Onion</a></li>
                  <li><a href="#">Papayaya &amp; Crisps</a></li>
                  <li><a href="#">Oatmeal</a></li>
                  <li><a href="#">Fresh Bananas</a></li>
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
              <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>Vegetable <br />100% Organic</h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Section