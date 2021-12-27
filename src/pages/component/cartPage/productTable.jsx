import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import {
  increaseItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  CalculateCart,
} from "../../../app/redux/cartSlice";
import { numberWithSpaces } from "../../../app/myLibrary/utilities";

import "./productTable.css";

export default function ListProductInCart() {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.productsInCart);

  const handleIncreaseItem = (product) => {
    dispatch(increaseItemToCart({ product: product, quantity: 1 }));
    dispatch(CalculateCart());
  };
  const handleDecreaseItem = (product) => {
    dispatch(decreaseItemFromCart({ product: product, quantity: 1 }));
    dispatch(CalculateCart());
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItemFromCart(product.id));
    dispatch(CalculateCart());
  };

  return (
    <>
      <table
        id="shopping-cart-table"
        className="data-table cart-table table-striped"
      >
        <colgroup>
          <col width="15%" />
          <col width="35%" />
          <col width="10%" />
          <col width="20%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr className="first last">
            <th rowspan="1">&nbsp;</th>
            <th rowspan="1">
              <span className="nobr">Product Name</span>
            </th>
            <th className="a-center" colspan="1">
              <span className="nobr">Price</span>
            </th>
            <th rowspan="1" className="a-center">
              Quantily
            </th>
            <th className="a-center" colspan="1">
              Total
            </th>
            <th rowspan="1" className="a-center">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr className="first last">
            <td colspan="50" className="a-right last">
              <button
                type="button"
                title="Continue Shopping"
                className="button btn-continue"
                onClick=""
              >
                <span>
                  <span>Continue Shopping</span>
                </span>
              </button>
              <button
                type="submit"
                name="update_cart_action"
                value="update_qty"
                title="Update Cart"
                className="button btn-update"
              >
                <span>
                  <span>Update Cart</span>
                </span>
              </button>
              <button
                type="submit"
                name="update_cart_action"
                value="empty_cart"
                title="Clear Cart"
                className="button btn-empty"
                id="empty_cart_button"
              >
                <span>
                  <span>Clear Cart</span>
                </span>
              </button>
            </td>
          </tr>
        </tfoot>
        <tbody>
          {productsInCart?.map((element, index) => {
            const { product, quantity } = element;
            let params = queryString.stringify({
              category_id: null,
              product_id: product.id,
            });
            return (
              <tr key={index} className="first last odd">
                <td className="image hidden-table">
                  <Link
                    to={`/product-details/${params}`}
                    title="Women&#39;s Georgette Animal Print"
                    className="product-image"
                  >
                    <img
                      src={product.image}
                      width="75"
                      alt="Women&#39;s Georgette Animal Print"
                    />
                  </Link>
                </td>
                <td>
                  <h2 className="product-name">
                    <Link to={`/product-details/${params}`}>
                      {product.name}
                    </Link>
                  </h2>
                </td>
                {/* <td className="a-center hidden-table">
                              <Link
                                to="/"
                                className="edit-bnt"
                                title="Edit item parameters"
                              ></Link>
                            </td> */}

                <td className="a-right hidden-table">
                  <span className="cart-price">
                    <span className="price">
                      {numberWithSpaces(product.price) + " VND"}
                    </span>
                  </span>
                </td>
                <td className="a-center movewishlist">
                  <div>
                    <div className="edit-quantity-area">
                      <button
                        onClick={() => {
                          handleDecreaseItem(product);
                        }}
                        className="edit-button"
                        type="button"
                      >
                        <i className="fa fa-minus">&nbsp;</i>
                      </button>
                      <input
                        type="text"
                        className="input-text qty"
                        title="Qty"
                        value={quantity}
                        maxlength="12"
                        id="qty"
                        name="qty"
                      />
                      <button
                        onClick={() => {
                          handleIncreaseItem(product);
                        }}
                        className="edit-button"
                        type="button"
                      >
                        <i className="fa fa-plus">&nbsp;</i>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="movewishlist">
                  <span className="cart-price">
                    <span className="price">
                      {numberWithSpaces(product.price * quantity) + " VND"}
                    </span>
                  </span>
                </td>
                <td className="a-center last">
                  <a
                    onClick={() => {
                      handleRemoveItem(product);
                    }}
                    href="#"
                    title="Remove item"
                    className="button remove-item"
                  >
                    <span>
                      <span>Remove item</span>
                    </span>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
