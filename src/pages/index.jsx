import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

import BestSeller from "./component/homepage.bestSeller";
import BrandCarousel from "../element/brand-slider-carousel";
import TestimonialCarousel from "../element/testimonial-carousel";
import SlideShow from "./component/homepage.slideshow";
import TopCategorySlider from "./component/homepage.topCategorySlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCategory } from "../app/redux/categorySlice";
import { fetchListProduct } from "../app/redux/productSlice";

export default function Index() {
  const dispatch = useDispatch();
  var productList = useSelector((state) => state.product.listProduct || []);
  useEffect(() => {
    window.sliderr();
    window.commonjs();
    dispatch(fetchListProduct({}));
  }, []);
  return (
    <>
      <Header />

      <div className="content">
        <SlideShow />
        {/* <!--Category slider Start--> */}
        <TopCategorySlider />
        {/* <!--Category silder End--> */}
        <div id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {" "}
                <Link to={" "} data-scroll-goto="1">
                  {" "}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzF1gmctV-axeyH6jNPQP4IF74UMWiLFhlg&usqp=CAU"
                    alt="promotion-banner1"
                    className="mh-100"
                  />{" "}
                </Link>{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {" "}
                <Link to={" "} data-scroll-goto="2">
                  {" "}
                  <img
                    src="https://fanboyfactor.com/wp-content/uploads/2017/07/Comic-Books-and-Beyond-banner-600x300.jpg"
                    alt="promotion-banner2"
                    className="mh-100"
                  />{" "}
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- best Pro Slider --> */}
        <section className=" wow bounceInUp animated">
          <div className="best-pro slider-items-products container">
            <div className="new_title">
              <h2>Best Seller</h2>
              <h4>So you get to know me better</h4>
            </div>
            <BestSeller />
          </div>
        </section>
        <div className="hot-section">
          <div className="container">
            <div className="row">
              <div className="ad-info">
                <h2>Hurry Up!</h2>
                <h3>Deal of the week</h3>
              </div>
            </div>
            <div className="row">
              <div className="hot-deal">
                <div className="box-timer">
                  <div className="countbox_1 timer-grid"></div>
                </div>
                <ul className="products-grid">
                  {productList.map((item, index) => {
                    console.log(item.image + ".....");
                    return (
                      <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <Link
                                to={`/product-details/${item.id}`}
                                title="Fresh Organic Mustard Leaves "
                                className="product-image"
                              >
                                <img src={item.image} alt={item.name} />
                              </Link>
                              <div className="new-label new-top-left">Hot</div>
                              <div className="item-box-hover">
                                <div className="box-inner">
                                  <div className="product-detail-bnt">
                                    <Link
                                      to={" "}
                                      className="button detail-bnt"
                                    >
                                      <span>Quick View</span>
                                    </Link>
                                  </div>
                                  <div className="actions">
                                    <span className="add-to-links">
                                      <Link
                                        to={" "}
                                        className="link-wishlist"
                                        title="Add to Wishlist"
                                      >
                                        <span>Add to Wishlist</span>
                                      </Link>{" "}
                                      <Link
                                        to={" "}
                                        className="link-compare add_to_compare"
                                        title="Add to Compare"
                                      >
                                        <span>Add to Compare</span>
                                      </Link>
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="add_cart">
                              <button className="button btn-cart" type="button">
                                <span>Add to Cart</span>
                              </button>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                <Link
                                  to={`/product-details/${item.id}`}
                                  title="Fresh Organic Mustard Leaves "
                                >
                                  {item.name}{" "}
                                </Link>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  <div className="ratings">
                                    <div className="rating-box">
                                      <div className="rating"></div>
                                    </div>
                                    <p className="rating-links">
                                      <Link to={" "}>1 Review(s)</Link>{" "}
                                      <span className="separator">|</span>{" "}
                                      <Link to={" "}>Add Review</Link>{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    <span className="regular-price">
                                      <span className="price">
                                        {item.price}
                                        {' VND'}
                                      </span>
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Logo Brand Block --> */}
      </div>

      {/* <!-- For version 1,2,3,4,6 --></div> */}

      <Footer />
    </>
  );
}
