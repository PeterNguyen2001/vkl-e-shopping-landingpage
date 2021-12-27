import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchListCategory } from "./../../app/redux/categorySlice";

export default function TopCategorySlider() {
  const dispatch = useDispatch();
  const listProduct = useSelector(
    (state) => state.product.listProduct || []
  );
  console.log("listProduct", listProduct);

  function CategoryCarousel() {
    useEffect(() => {
      window.commonjs();
    }, []);
    return (
      <div id="top-categories" className="product-flexslider hidden-buttons">
        <div className="slider-items slider-width-col4 products-grid">
          {listProduct.map((cate, index) => (
            <div className="item" key={index}>
              {" "}
              <Link to={"/product-details/" + cate.id}>
                <div className="pro-img">
                  <img src={cate.image} alt="Fresh Organic Mustard Leaves " />
                  <div className="pro-info">{cate.name}</div>
                </div>
              </Link>{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="top-cate">
        <div className="featured-pro container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-items-products">
                <CategoryCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
