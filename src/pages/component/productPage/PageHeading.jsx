import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function ProductPageHeading({ currentCategory }) {
  return (
    <div>
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
                    <strong>{currentCategory.name}</strong>{" "}
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
          <h2>{currentCategory.name}</h2>
        </div>
      </div>
    </div>
  );
}
