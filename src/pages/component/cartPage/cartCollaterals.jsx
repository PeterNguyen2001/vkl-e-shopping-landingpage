import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { numberWithSpaces } from "../../../app/myLibrary/utilities";
import CitiesBox from "./cartCollaterals.citiesBox";
import DistrictsBox from "./cartCollaterals.districtsBox";
import WardsBox from "./cartCollaterals.wardsBox";

export default function CartCollaterals() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cities = useSelector((state) => state.address.cities);
  const history = useHistory();
  return (
    <>
      <div className="cart-collaterals container">
        {/* <!-- BEGIN COL2 SEL COL 1 --> */}
        <div className="row">
          {/* <!-- BEGIN TOTALS COL 2 --> */}
          {/* <div className="col-sm-4"></div> */}

          <div className="col-sm-6">
            <div className="discount">
              <h3>COUPON CODE</h3>
              <form id="discount-coupon-form" action="" method="post">
                <label for="coupon_code">Enter your coupon code.</label>
                <input
                  type="hidden"
                  name="remove"
                  id="remove-coupone"
                  value="0"
                />
                <input
                  className="input-text fullwidth"
                  style={{ maxWidth: "500px" }}
                  type="text"
                  id="coupon_code"
                  name="coupon_code"
                  value=""
                />
                <button
                  type="button"
                  title="Apply Coupon"
                  className="button coupon "
                  onClick="discountForm.submit(false)"
                  value="Apply Coupon"
                >
                  <span>APPLY</span>
                </button>
              </form>
            </div>

            {/* <!--discount--> */}
          </div>

          {/* <!--col-sm-4--> */}

          <div className="col-sm-6">
            <div className="totals">
              <h3>Value of your total cart</h3>
              <div className="inner">
                <table
                  id="shopping-cart-totals-table"
                  className="table shopping-cart-table-total"
                >
                  <colgroup>
                    <col />
                    <col width="1" />
                  </colgroup>
                  <tfoot>
                    <tr>
                      <td className="a-left" colspan="1">
                        <strong>Total</strong>
                      </td>
                      <td className="a-right">
                        <strong>
                          <span className="price">
                            {numberWithSpaces(totalPrice) + " VND"}
                          </span>{" "}
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td className="a-left" colspan="1">
                        Notional Price{" "}
                      </td>
                      <td className="a-right">
                        <span className="price">
                          {numberWithSpaces(totalPrice) + " VND"}
                        </span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="a-left" colspan="1">
                        Discount{" "}
                      </td>
                      <td className="a-right">
                        <span className="price">
                          {"-" + numberWithSpaces(0) + " VND"}
                        </span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <ul className="checkout">
                  <li>
                    <button
                      type="button"
                      title="Proceed to Checkout"
                      className="button btn-proceed-checkout"
                      onClick={() => {
                        history.push("/checkout");
                      }}
                    >
                      <span>Go to checkout</span>
                    </button>
                  </li>
                  <br />
                  <br />
                </ul>
              </div>

              {/* <!--inner--> */}
            </div>

            {/* <!--totals--> */}
          </div>

          {/* <!--col-sm-4--> */}
        </div>

        {/* <!--cart-collaterals--> */}
      </div>
    </>
  );
}
