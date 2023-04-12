//import '../css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
function Category() {
    return (
      <>
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
      <div class='container-fluid' >            
      
    </div>  
      </>
    )
}
export default Category