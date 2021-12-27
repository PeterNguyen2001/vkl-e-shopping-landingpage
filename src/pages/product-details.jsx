import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCategory } from "../app/redux/categorySlice";
import {
  fetchListProduct,
  fetchListProductByCategory,
  fetchProductById,
} from "../app/redux/productSlice";
import ProductPageHeading from "./component/productPage/PageHeading";
import { numberWithSpaces } from "../app/myLibrary/utilities";
import RelatedProduct from "./component/productPage/RelatedProduct";
import AddToBoxComponent from "./component/productPage/productDetail.AddToBox";
import axiosClient from "./../app/axiosClient";

export default function ProductDetails() {
  const { productInfo } = useParams();
  let info = queryString.parse(productInfo);
  const { id } = useParams();
  const [currentCategory, setCurrentCategory] = useState({});
  const [currentProduct, setCurrentProduct] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    window.commonjs();
    window.zoomimg();
    axiosClient.get("/api/products?id=" + id).then((res) => {
      console.log("id", info.productInfo);
      console.log("res", res);
      setCurrentProduct(res.data);
    });
  }, []);

  console.log("product detail - current Product = ", currentProduct);

  const handleAddToCart = () => {};

  return (
    <>
      <Header />

      <ProductPageHeading currentCategory={currentCategory} />
      {/* <!-- BEGIN Main Container --> */}
      <div className="main-container col1-layout wow bounceInUp animated">
        <div className="main">
          <div className="col-main">
            {/* <!-- Endif Next Previous Product --> */}
            <div
              className="product-view wow bounceInUp animated"
              itemscope=""
              itemtype="http://schema.org/Product"
              itemid="#product_base"
            >
              <div id="messages_product_view"></div>
              {/* <!--product-next-prev--> */}
              <div className="product-essential container">
                <div className="row">
                  <form action="#" method="post" id="product_addtocart_form">
                    {/* <!--End For version 1, 2, 6 --> */}
                    {/* <!-- For version 3 --> */}
                    <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                      <div className="new-label new-top-left">Hot</div>
                      <div className="sale-label sale-top-left">-15%</div>
                      <div className="product-image">
                        <div className="product-full">
                          {" "}
                          <img
                            id="product-zoom"
                            src={currentProduct?.image}
                            alt="product-image"
                          />
                        </div>
                      </div>
                      {/* <!-- end: more-images --> */}
                    </div>
                    {/* <!--End For version 1,2,6--> */}
                    {/* <!-- For version 3 --> */}
                    <div className="product-shop col-lg- col-sm-7 col-xs-12">
                      <div className="product-next-prev">
                        {" "}
                        <Link className="product-next" to={" "}>
                          <span></span>
                        </Link>{" "}
                        <Link className="product-prev" to={" "}>
                          <span></span>
                        </Link>{" "}
                      </div>
                      <div className="brand">{currentCategory?.name}</div>
                      <div className="product-name">
                        <h1>{currentProduct?.name}</h1>
                      </div>
                      <div className="ratings">
                        <div className="rating-box">
                          <div
                            style={{ width: "60%" }}
                            className="rating"
                          ></div>
                        </div>
                        <p className="rating-links">
                          {" "}
                          <Link to={" "}>1 Review</Link>{" "}
                          <span className="separator">|</span>{" "}
                          <Link to={" "}>Add Your Review</Link>{" "}
                        </p>
                      </div>
                      <div className="price-block">
                        <div className="price-box">
                          <p className="availability in-stock">
                            <span>In Stock</span>
                          </p>
                          <p className="special-price">
                            {" "}
                            <span className="price-label">GIÁ</span>
                            <span id="product-price-48" className="price">
                              {" "}
                              {numberWithSpaces(currentProduct?.price)}
                              {" VND "}
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                      <AddToBoxComponent product={currentProduct} />
                      <div className="short-description">
                        <p>{currentProduct?.description}</p>
                      </div>
                      <div className="email-addto-box">
                        <ul className="add-to-links">
                          <li>
                            {" "}
                            <Link className="link-wishlist" to={"/wishlist"}>
                              <span>Add to Wishlist</span>
                            </Link>
                          </li>
                          <li>
                            <span className="separator">|</span>{" "}
                            <Link className="link-compare" to={"/compare"}>
                              <span>Add to Compare</span>
                            </Link>
                          </li>
                        </ul>
                        <p className="email-friend">
                          <Link to={" "} className="">
                            <span>Email to a Friend</span>
                          </Link>
                        </p>
                      </div>
                      <div className="social">
                        <ul className="link">
                          <li className="fb">
                            <Link to={" "}></Link>
                          </li>
                          <li className="tw">
                            <Link to={" "}></Link>
                          </li>
                          <li className="googleplus">
                            <Link to={" "}></Link>
                          </li>
                          <li className="rss">
                            <Link to={" "}></Link>
                          </li>
                          <li className="pintrest">
                            <Link to={" "}></Link>
                          </li>
                          <li className="linkedin">
                            <Link to={" "}></Link>
                          </li>
                          <li className="youtube">
                            <Link to={" "}></Link>
                          </li>
                        </ul>
                      </div>

                      <ul className="shipping-pro">
                        <li>Free Shipping in around 1km</li>
                        <li>Return within the day</li>
                        <li>Big discount for members</li>
                      </ul>
                    </div>
                    {/* <!--product-shop--> */}
                    {/* <!--Detail page static block for version 3--> */}
                  </form>
                </div>
              </div>
              {/* <!--product-essential--> */}

              {/* <!--product-collateral--> */}
              <div className="box-additional">
                {/* <!-- BEGIN RELATED PRODUCTS --> */}
                <div className="related-pro container">
                  <RelatedProduct currentCategory={currentCategory} />
                </div>
                {/* <!-- end related product --> */}
              </div>
              {/* <!-- end related product --> */}
            </div>
            {/* <!--box-additional--> */}
            {/* <!--product-view--> */}
          </div>
        </div>
        {/* <!--col-main--> */}
      </div>

      <div className="container">
        <div className="row our-features-box">
          <ul>
            <li>
              <div className="feature-box">
                <div className="icon-truck"></div>
                <div className="content">FREE SHIPPING on order over $99</div>
              </div>
            </li>
            <li>
              <div className="feature-box">
                <div className="icon-support"></div>
                <div className="content">
                  Have a question? <br />
                  +1 800 789 0000{" "}
                </div>
              </div>
            </li>
            <li>
              <div className="feature-box">
                <div className="icon-money"></div>
                <div className="content">100% Money Back Guarantee</div>
              </div>
            </li>
            <li>
              <div className="feature-box">
                <div className="icon-return"></div>
                <div className="content">30 days return Service</div>
              </div>
            </li>
            <li className="last">
              <div className="feature-box">
                {" "}
                <Link to={" "}>
                  <i className="fa fa-apple"></i> download
                </Link>{" "}
                <Link to={" "}>
                  <i className="fa fa-android"></i> download
                </Link>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
