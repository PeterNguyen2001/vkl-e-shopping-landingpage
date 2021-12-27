import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchListProduct } from "../app/redux/productSlice";

export default function Grid() {
  const productList = useSelector((state) => state.product.listProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    window.commonjs();
    dispatch(fetchListProduct());
  }, []);

  return (
    <>
      <Header />

      <div className="page-heading">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <ul>
                  <li className="home">
                    {" "}
                    <Link to={"/"} title="Go to Home Page">
                      Home
                    </Link>{" "}
                    <span>&rsaquo;</span>{" "}
                  </li>
                  <li className="category1601">
                    {" "}
                    <strong>Product Grid</strong>{" "}
                  </li>
                </ul>
              </div>

              {/* <!--col-xs-12--> */}
            </div>

            {/* <!--row--> */}
          </div>

          {/* <!--container--> */}
        </div>
        <div className="page-title">
          <h2>Product Grid</h2>
        </div>
      </div>

      {/* <!--breadcrumbs--> */}

      {/* <!-- BEGIN Main Container col2-left --> */}
      <section className="main-container col2-left-layout bounceInUp animated">
        {/* <!-- For version 1, 2, 3, 8 --> */}

        {/* <!-- For version 1, 2, 3 --> */}
        <div className="container">
          <div className="row">
            <div className="col-main col-sm-9 col-sm-push-3 product-grid">
              <div className="pro-coloumn">
                <div className="category-description std">
                  <div className="slider-items-products">
                    <div
                      id="category-desc-slider"
                      className="product-flexslider hidden-buttons"
                    >
                      <div className="slider-items slider-width-col1 owl-carousel owl-theme">
                        {/* <!-- Item --> */}
                        <div className="item">
                          {" "}
                          <Link to={" "}>
                            <img
                              alt=""
                              src="https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/2c7f5144-5a11-4cd1-9652-de1057435f60/best-nordic-noir-header.jpg"
                            />
                          </Link>
                        </div>

                        {/* <!-- End Item --> */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          {" "}
                          <Link to={" "}>
                            <img
                              alt=""
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0sl6txnVaKHILc9akzkeY_HDkKm14a_heA&usqp=CAU"
                            />
                          </Link>
                          {/* <!-- End Item --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <article>
                  <div className="toolbar">
                    <div className="sorter">
                      <div className="view-mode">
                        {" "}
                        <span
                          title="Grid"
                          className="button button-active button-grid"
                        >
                          &nbsp;
                        </span>
                        <Link to={"/list"} title="List" className="button-list">
                          &nbsp;
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="sort-by">
                      <label className="left">Sort By: </label>
                      <ul>
                        <li>
                          <Link to={" "}>
                            Position<span className="right-arrow"></span>
                          </Link>
                          <ul>
                            <li>
                              <Link to={" "}>Name</Link>
                            </li>
                            <li>
                              <Link to={" "}>Price</Link>
                            </li>
                            <li>
                              <Link to={" "}>Position</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <Link
                        className="button-asc left"
                        to={" "}
                        title="Set Descending Direction"
                      >
                        <span className="top_arrow"></span>
                      </Link>
                    </div>
                    <div className="pager">
                      <div className="limiter">
                        <label>View: </label>
                        <ul>
                          <li>
                            <Link to={" "}>
                              15<span className="right-arrow"></span>
                            </Link>
                            <ul>
                              <li>
                                <Link to={" "}>20</Link>
                              </li>
                              <li>
                                <Link to={" "}>30</Link>
                              </li>
                              <li>
                                <Link to={" "}>35</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="pages">
                        <label>Page:</label>
                        <ul className="pagination">
                          <li>
                            <Link to={" "}>&laquo;</Link>
                          </li>
                          <li className="active">
                            <Link to={" "}>1</Link>
                          </li>
                          <li>
                            <Link to={" "}>2</Link>
                          </li>
                          <li>
                            <Link to={" "}>3</Link>
                          </li>
                          <li>
                            <Link to={" "}>4</Link>
                          </li>
                          <li>
                            <Link to={" "}>5</Link>
                          </li>
                          <li>
                            <Link to={" "}>&raquo;</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="category-products">
                    <ul className="products-grid">
                      {productList?.map((product, idx) => (
                        <li className="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
                          <div className="item-inner">
                            <div className="item-img">
                              <div className="item-img-info mh-100">
                                <Link
                                  to={"product-details"}
                                  title="Fresh Organic Mustard Leaves "
                                  className="product-image"
                                >
                                  <img
                                    className="mh-100"
                                    src={product.image}
                                    alt={product.name}
                                  />
                                </Link>

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
                                <button
                                  className="button btn-cart"
                                  type="button"
                                >
                                  <span>Add to Cart</span>
                                </button>
                              </div>
                            </div>
                            <div className="item-info">
                              <div className="info-inner">
                                <div className="item-title">
                                  <Link
                                    to={`/product-details/${product.id}`}
                                    title="Fresh Organic Mustard Leaves "
                                  >
                                    {product.name}{" "}
                                  </Link>{" "}
                                </div>
                                <div className="item-content">
                                  <div className="rating">
                                    <div className="ratings">
                                      <div className="rating-box">
                                        <div
                                          className="rating"
                                          style={{ width: "80%" }}
                                        ></div>
                                      </div>
                                      <p className="rating-links">
                                        <Link to={" "}>1 Review(s)</Link>
                                        <span className="separator">
                                          |
                                        </span>{" "}
                                        <Link to={" "}>Add Review</Link>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="item-price">
                                    <div className="price-box">
                                      <span className="regular-price">
                                        <span className="price">
                                          {product.price}
                                          {" VND"}
                                        </span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="toolbar bottom">
                    <div className="display-product-option">
                      <div className="pages">
                        <label>Page:</label>
                        <ul className="pagination">
                          <li>
                            <Link to={" "}>«</Link>
                          </li>
                          <li className="active">
                            <Link to={" "}>1</Link>
                          </li>
                          <li>
                            <Link to={" "}>2</Link>
                          </li>
                          <li>
                            <Link to={" "}>3</Link>
                          </li>
                          <li>
                            <Link to={" "}>»</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-option-right">
                        <div className="sort-by">
                          <label className="left">Sort By: </label>
                          <ul>
                            <li>
                              <Link to={" "}>
                                Position<span className="right-arrow"></span>
                              </Link>
                              <ul>
                                <li>
                                  <Link to={" "}>Name</Link>
                                </li>
                                <li>
                                  <Link to={" "}>Price</Link>
                                </li>
                                <li>
                                  <Link to={" "}>Position</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <Link
                            className="button-asc left"
                            to={" "}
                            title="Set Descending Direction"
                          >
                            <span className="top_arrow"></span>
                          </Link>
                        </div>
                        <div className="pager">
                          <div className="limiter">
                            <label>View: </label>
                            <ul>
                              <li>
                                <Link to={" "}>
                                  15<span className="right-arrow"></span>
                                </Link>
                                <ul>
                                  <li>
                                    <Link to={" "}>20</Link>
                                  </li>
                                  <li>
                                    <Link to={" "}>30</Link>
                                  </li>
                                  <li>
                                    <Link to={" "}>35</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
              {/* <!-- BEGIN SIDE-NAV-CATEGORY --> */}
              <div className="side-nav-categories">
                <div className="block-title"> Categories </div>

                {/* <!--block-title--> */}

                {/* <!-- BEGIN BOX-CATEGORY --> */}
                <div className="box-content box-category">
                  <ul>
                    <li>
                      {" "}
                      <Link className="active" to={"/grid"}>
                        Books categories
                      </Link>{" "}
                      <span className="subDropdown minus"></span>
                      <ul className="level0_415" style={{ display: "block" }}>
                        <li>
                          {" "}
                          <Link to={"/grid"}> Romance </Link>{" "}
                          <span className="subDropdown plus"></span>
                          {/* <!--level1--> */}
                        </li>

                        {/* <!--level1--> */}
                        <li>
                          {" "}
                          <Link to={"/grid"}>Thrillers </Link>{" "}
                          <span className="subDropdown plus"></span>
                          {/* <!--level1--> */}
                        </li>

                        {/* <!--level1--> */}
                        <li>
                          {" "}
                          <Link to={"/grid"}>Poetry</Link>{" "}
                          <span className="subDropdown plus"></span>
                          {/* <!--level1--> */}
                        </li>

                        {/* <!--level1--> */}
                        <li>
                          {" "}
                          <Link to={"/grid"}>History </Link>{" "}
                          <span className="subDropdown plus"></span>
                          {/* <!--level1--> */}
                        </li>

                        <li>
                          {" "}
                          <Link to={"/grid"}>Sci-fi </Link>{" "}
                          <span className="subDropdown plus"></span>
                          {/* <!--level1--> */}
                        </li>
                      </ul>
                      {/* <!--level0--> */}
                    </li>

                    {/* <!--level 0--> */}
                  </ul>
                </div>

                {/* <!--box-content box-category--> */}
              </div>

              {/* <!--side-nav-categories--> */}
              <div className="block block-layered-nav">
                <div className="block-title"> Shop By </div>
                <div className="block-content">
                  <p className="block-subtitle">Shopping Options</p>
                  <dl id="narrow-by-list">
                    <dt className="odd">Price</dt>
                    <dd className="odd">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>
                            <span className="price">0 VND</span> -{" "}
                            <span className="price">1.000.000 VND</span>
                          </Link>{" "}
                          (6){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>
                            <span className="price">1.000.000 VND</span> and
                            above
                          </Link>{" "}
                          (6){" "}
                        </li>
                      </ol>
                    </dd>
                    <dt className="even">Manufacturer</dt>
                    <dd className="even">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>TheBrand</Link> (9){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Company</Link> (4){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>LogoFashion</Link> (1){" "}
                        </li>
                      </ol>
                    </dd>
                    <dt className="odd">Color</dt>
                    <dd className="odd">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>Green</Link> (1){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>White</Link> (5){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Black</Link> (5){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Gray</Link> (4){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Dark Gray</Link> (3){" "}
                        </li>
                      </ol>
                    </dd>
                    <dt className="last even">Size</dt>
                    <dd className="last even">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>Small</Link> (6){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Medium</Link> (6){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Large</Link> (4){" "}
                        </li>
                      </ol>
                    </dd>
                  </dl>
                </div>
              </div>

              {/* <!--block block-list block-compare--> */}
            </aside>

            {/* <!--col-right sidebar--> */}
          </div>

          {/* <!--row--> */}
        </div>

        {/* <!--container--> */}
      </section>

      {/* <!--main-container col2-left-layout--> */}

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
                  Have a question?
                  <br />
                  +1 800 789 0000
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
