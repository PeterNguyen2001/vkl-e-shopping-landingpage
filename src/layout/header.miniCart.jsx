import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { numberWithSpaces } from "../app/myLibrary/utilities";

export default function MiniCartContent() {
  const currentCart = useSelector((state) => state.cart);
  const { productsInCart, totalPrice, amountItem } = currentCart;
  return (
    <>
      <div className="fl-cart-contain">
        <div className="mini-cart">
          <div className="basket">
            {" "}
            <Link to={"/shopping-cart"}>
              <span> {amountItem} </span>
            </Link>{" "}
          </div>
          <div className="fl-mini-cart-content">
            <div className="block-subtitle">
              <div className="top-subtotal">
                {amountItem + " Items,"}{" "}
                <span className="price">
                  {numberWithSpaces(totalPrice) + " VND"}
                </span>{" "}
              </div>
              {/* <!--top-subtotal--> */}
              {/* <!--pull-right--> */}
            </div>
            {/* <!--block-subtitle--> */}
            <ul className="mini-products-list" id="cart-sidebar">
              {productsInCart.map((element, index) => {
                const { product, quantity } = element;
                let params = queryString.stringify({
                  category_id: null,
                  product_id: product.id,
                });
                return (
                  <li className="item first">
                    <div className="item-inner">
                      <Link
                        className="product-image"
                        title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                        to={`/product-details/${params}`}
                      >
                        <img
                          alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                          src={product.image}
                        />
                      </Link>
                      <div className="product-details">
                        <div className="access">
                          <Link
                            className="btn-remove1"
                            title="Remove This Item"
                            to={" "}
                          >
                            Remove
                          </Link>{" "}
                          <Link className="btn-edit" title="Edit item" to={" "}>
                            <i className="icon-pencil"></i>
                            <span className="hidden">Edit item</span>
                          </Link>{" "}
                        </div>
                        {/* <!--access--> */}
                        <strong>{quantity}</strong> x{" "}
                        <span className="price">
                          {numberWithSpaces(product.price) + " VND"}
                        </span>
                        <p className="product-name">
                          <Link to={`/product-details/${params}`}>
                            {product.name}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="actions">
              <Link
                to={"/shopping-cart"}
                className="btn-checkout"
                title="Checkout"
                type="button"
              >
                <span>View Cart</span>
              </Link>
            </div>
            {/* <!--actions--> */}
          </div>
          {/* <!--fl-mini-cart-content--> */}
        </div>
      </div>
    </>
  );
}
