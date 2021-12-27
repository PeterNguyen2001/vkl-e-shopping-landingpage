import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { numberWithSpaces } from "../../../app/myLibrary/utilities";
import {
  fetchListProduct,
  fetchListProductByCategory,
} from "../../../app/redux/productSlice";

export default function RelatedProduct({ currentCategory }) {
  const listProduct = useSelector((state) => state.product.listProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentCategory) return;
    console.log("list product component - fetch data ");
    if (currentCategory.id === null) {
      dispatch(fetchListProduct({}));
    } else {
      dispatch(fetchListProductByCategory(currentCategory.id));
    }
  }, [currentCategory]);

  function ProductsCarousel() {
    useEffect(() => {
      window.commonjs();
    }, []);

    return (
      <div id="related-slider" className="product-flexslider hidden-buttons">
        <div className="slider-items slider-width-col4 products-grid">
          {listProduct.map((product, index) => {
            let params = queryString.stringify({
              category_id: currentCategory?.id,
              product_id: product?.id,
            });
            return (
              <div className="item" key={index}>
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info">
                      <Link
                        to={`/product-details/${params}`}
                        title="Fresh Organic Mustard Leaves "
                        className="product-image"
                      >
                        <img
                          style={{ width: "247px", height: "247px" }}
                          src={product.image}
                          alt="Fresh Organic Mustard Leaves "
                        />
                      </Link>
                      <div className="item-box-hover">
                        <div className="box-inner">
                          <div className="product-detail-bnt">
                            <Link
                              to={`/product-details/${params}`}
                              title={product.name}
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
                          to={`/product-details/${params}`}
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
                                {numberWithSpaces(product.price)}
                              </span>
                              {" VND"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="slider-items-products">
        <div className="new_title center">
          <h2>Related Product</h2>
          <ProductsCarousel />
        </div>
      </div>
    </div>
  );
}
