import React, { Component } from "react";
import { Link } from "react-router-dom";
// import $ from 'jquery';

// import {} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="header-banner">
                    <div className="assetBlock">
                      <div id="slideshow">
                        <p>
                          Special Offers! - Get <span>50%</span> off on
                          all books{" "}
                        </p>
                        <p>
                          sale <span>40%</span> of on bulk shopping!{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="header">
            <div className="container">
              <div className="header-container row">
                <div className="logo">
                  {" "}
                  <Link to={"/"} title="index">
                    <div>
                      <img src="/assets/img/logo.png" alt="logo" />
                    </div>
                  </Link>{" "}
                </div>
                <div className="fl-nav-menu">
                  <nav>
                    <div className="mm-toggle-wrap">
                      <div className="mm-toggle">
                        <i className="icon-align-justify"></i>
                        <span className="mm-label">Menu</span>{" "}
                      </div>
                    </div>
                    <div className="nav-inner">
                      {/* <!-- BEGIN NAV --> */}
                      <ul id="nav" className="hidden-xs">
                        <li>
                          {" "}
                          <Link className="level-top" to={"/"}>
                            <span>Home</span>
                          </Link>
                        </li>
                        <li className="mega-menu">
                          {" "}
                          <Link className="level-top" to={"/grid"}>
                            <span>Fruits</span>
                          </Link>
                          <div className="level0-wrapper dropdown-6col">
                            <div className="container">
                              <div className="level0-wrapper2">
                                <div className="col-1">
                                  <div className="nav-block nav-block-center">
                                    {/* <!--mega menu--> */}
                                    <ul className="level0">
                                      <li className="level3 nav-6-1 parent item">
                                        {" "}
                                        <Link to={"/grid"}>
                                          <span>Tropical Fruits</span>
                                        </Link>
                                        {/* <!--sub sub category--> */}
                                        <ul className="level1">
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Coconuts</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Dragonfruits</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Pomegranates</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Passionfruit</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                        </ul>
                                        {/* <!--level1--> */}
                                        {/* <!--sub sub category--> */}
                                      </li>
                                      {/* <!--level3 nav-6-1 parent item--> */}
                                      <li className="level3 nav-6-1 parent item">
                                        {" "}
                                        <Link to={"/grid"}>
                                          <span>Citrus Fruits‎</span>
                                        </Link>
                                        {/* <!--sub sub category--> */}
                                        <ul className="level1">
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Fresh Oranges</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Grapefruits</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Organic Limes</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Yellow Lemons</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                        </ul>
                                        {/* <!--level1--> */}
                                        {/* <!--sub sub category--> */}
                                      </li>
                                      {/* <!--level3 nav-6-1 parent item--> */}
                                      <li className="level3 nav-6-1 parent item">
                                        {" "}
                                        <Link to={"/grid"}>
                                          <span>Stone Fruits</span>
                                        </Link>
                                        {/* <!--sub sub category--> */}
                                        <ul className="level1">
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Sweet Apricots</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Nectarines</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Doughnut Peachs</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Italian Fruits</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                        </ul>
                                        {/* <!--level1--> */}
                                        {/* <!--sub sub category--> */}
                                      </li>
                                      {/* <!--level3 nav-6-1 parent item--> */}
                                      <li className="level3 nav-6-1 parent item">
                                        {" "}
                                        <Link to={"/grid"}>
                                          <span>Large Fruits</span>
                                        </Link>
                                        {/* <!--sub sub category--> */}
                                        <ul className="level1">
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Pineapples</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Organic Papayas</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Fresh Melons</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Grapefruits</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                        </ul>
                                        {/* <!--level1--> */}
                                        {/* <!--sub sub category--> */}
                                      </li>
                                      {/* <!--level3 nav-6-1 parent item--> */}
                                      <li className="level3 nav-6-1 parent item">
                                        {" "}
                                        <Link to={"/grid"}>
                                          <span>Seasonal Fruits</span>
                                        </Link>
                                        {/* <!--sub sub category--> */}
                                        <ul className="level1">
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Black Jamuns</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Fresh Mangos</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Organic Litchis</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Longans</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                        </ul>
                                        {/* <!--level1--> */}
                                        {/* <!--sub sub category--> */}
                                      </li>
                                      {/* <!--level3 nav-6-1 parent item--> */}
                                      <li className="level3 nav-6-1 parent item">
                                        {" "}
                                        <Link to={"/grid"}>
                                          <span>Berries & Cherries</span>
                                        </Link>
                                        {/* <!--sub sub category--> */}
                                        <ul className="level1">
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Strawberries</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Raspberries</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Blackberries</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                          <li className="level2 nav-6-1-1">
                                            {" "}
                                            <Link to={"/grid"}>
                                              <span>Cherries</span>
                                            </Link>
                                          </li>
                                          {/* <!--level2 nav-6-1-1--> */}
                                        </ul>
                                        {/* <!--level1--> */}
                                        {/* <!--sub sub category--> */}
                                      </li>
                                      {/* <!--level3 nav-6-1 parent item--> */}
                                    </ul>
                                    {/* <!--level0--> */}
                                  </div>
                                  {/* <!--nav-block nav-block-center--> */}
                                </div>
                                {/* <!--col-1--> */}
                                <div className="col-2">
                                  <div className="menu_image">
                                    <Link title="" to={"/grid"}>
                                      <img
                                        alt="menu_image"
                                        src="/assets/img/banner.jpg"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                {/* <!--col-2--> */}
                              </div>
                              {/* <!--level0-wrapper2--> */}
                            </div>
                            {/* <!--container--> */}
                          </div>
                          {/* <!--level0-wrapper dropdown-6col--> */}
                          {/* <!--mega menu--> */}
                        </li>
                        <li className="mega-menu">
                          {" "}
                          <Link className="level-top" to={"/grid"}>
                            <span>Salads‎</span>
                          </Link>
                          <div className="level0-wrapper dropdown-6col">
                            <div className="container">
                              <div className="level0-wrapper2">
                                <div className="nav-block nav-block-center">
                                  {/* <!--mega menu--> */}
                                  <ul className="level0">
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Veg Salads</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Tomatoes</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Cucumbers</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Peppers & Capsicums</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Avocados</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Dressings Salads</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Hellmann's</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Giuseppe Giusti</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Unitednature</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Walden Farms</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Fruits Salads</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Pineapples</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Red Apple</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Strawberries</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Row Mangos</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Bagged Salads</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Italian Baby Spinach</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Australia Green Kale</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Sustenir Fresh Toscano</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Oro Rocket Salad</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Lettuce Salads</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Butterhead</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Red Coral</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Rolla Rosa Lettuce</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Summercrisp</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Bread Salads</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Green Goddess</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Grilled Broccoli</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Panzanella</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Green Tomato</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                  </ul>
                                  {/* <!--level0--> */}
                                </div>
                                {/* <!--nav-block nav-block-center--> */}
                                <div className="nav-add">
                                  <div className="push_item">
                                    <div className="push_img">
                                      <Link to={" "}>
                                        <img
                                          src="/assets/img/banner1.jpg"
                                          alt="menu item 1"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="push_item">
                                    <div className="push_img">
                                      <Link to={" "}>
                                        <img
                                          src="/assets/img/banner2.jpg"
                                          alt="menu item 2"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="push_item">
                                    <div className="push_img">
                                      <Link to={" "}>
                                        <img
                                          src="/assets/img/banner3.jpg"
                                          alt="menu item 3"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="push_item push_item_last">
                                    <div className="push_img">
                                      <Link to={" "}>
                                        <img
                                          src="/assets/img/banner4.jpg"
                                          alt="menu item 4"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <!--level0-wrapper2--> */}
                            </div>
                            {/* <!--container--> */}
                          </div>
                          {/* <!--level0-wrapper dropdown-6col--> */}
                          {/* <!--mega menu--> */}
                        </li>
                        <li className="mega-menu">
                          {" "}
                          <Link className="level-top" to={"/grid"}>
                            <span>Vegetables</span>
                          </Link>
                          <div className="level0-wrapper dropdown-6col">
                            <div className="container">
                              <div className="level0-wrapper2">
                                <div className="nav-block nav-block-center">
                                  {/* <!--mega menu--> */}

                                  <ul className="level0">
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Leafy Vegetables</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Sprouts</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Lettuce</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Banana Leaves</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Microgreens</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Mushrooms</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Shimeji Mushroom</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Portobello Mushroom</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Oyster Mushroom</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Shiitake Mushroom</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Baby Vegetables</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Cabbage</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Capsicums</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Pak Choi</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Spinach</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Salad Vegetables</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Cucumbers</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Avocados</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Mustard Leaves</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Tomatoes</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Asian Vegetables</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Spring Onion</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Lady Fingers</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Watercress</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Curry Leaves</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                    <li className="level3 nav-6-1 parent item">
                                      {" "}
                                      <Link to={"/grid"}>
                                        <span>Beans Vegetables</span>
                                      </Link>
                                      {/* <!--sub sub category--> */}
                                      <ul className="level1">
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>French Beans</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Sweet Corn</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Fine Green Beans</span>
                                          </Link>
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                        <li className="level2 nav-6-1-1">
                                          {" "}
                                          <Link to={"/grid"}>
                                            <span>Petai Beans</span>
                                          </Link>{" "}
                                        </li>
                                        {/* <!--level2 nav-6-1-1--> */}
                                      </ul>
                                      {/* <!--level1--> */}
                                      {/* <!--sub sub category--> */}
                                    </li>
                                    {/* <!--level3 nav-6-1 parent item--> */}
                                  </ul>
                                  {/* <!--level0--> */}
                                </div>
                                {/* <!--nav-block nav-block-center--> */}
                              </div>
                              {/* <!--level0-wrapper2--> */}
                            </div>
                            {/* <!--container--> */}
                          </div>
                          {/* <!--level0-wrapper dropdown-6col--> */}
                          {/* <!--mega menu--> */}
                        </li>
                        <li className="mega-menu">
                          {" "}
                          <Link className="level-top" to={"/grid"}>
                            <span>Juices</span>
                          </Link>{" "}
                        </li>
                        <li className="mega-menu">
                          {" "}
                          <Link className="level-top" to={"/grid"}>
                            <span>Meats</span>
                          </Link>{" "}
                        </li>
                        <li className="level0 parent drop-menu">
                          <Link to={" "}>
                            <span>Pages</span>{" "}
                          </Link>
                          {/* <!--sub sub category--> */}
                          <ul className="level1">
                            <li className="level1 first">
                              <Link to={"/grid"}>
                                <span>Product Grid</span>
                              </Link>
                            </li>
                            <li className="level1 nav-10-2">
                              {" "}
                              <Link to={"/list"}>
                                {" "}
                                <span>Product List</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1 nav-10-3">
                              {" "}
                              <Link to={"/product-details"}>
                                <span>Product Detail</span>{" "}
                              </Link>
                            </li>
                            <li className="level1 nav-10-4">
                              {" "}
                              <Link to={"/shopping-cart"}>
                                {" "}
                                <span>Cart Page</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1 first parent">
                              <Link to={"/checkout"}>
                                <span>Checkout</span>
                              </Link>
                            </li>
                            <li className="level1 nav-10-4">
                              {" "}
                              <Link to={"/wishlist"}>
                                <span>Wishlist</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/dashboard"}>
                                {" "}
                                <span>Dashboard</span>
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/multiple-addresses"}>
                                {" "}
                                <span>Multiple Addresses</span>{" "}
                              </Link>
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/about-us"}>
                                {" "}
                                <span>About us</span>{" "}
                              </Link>
                            </li>
                            <li className="level1 first parent">
                              <Link to={"/blog"}>
                                <span>Blog</span>
                              </Link>
                              {/* <!--sub sub category--> */}
                              <ul className="level2 right-sub">
                                <li className="level2 nav-2-1-1 first">
                                  <Link to={"/blog-detail"}>
                                    <span>Blog Detail</span>
                                  </Link>
                                </li>
                              </ul>
                              {/* <!--sub sub category--> */}
                            </li>
                            <li className="level1">
                              <Link to={"/contact-us"}>
                                <span>Contact us</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/404error"}>
                                <span>404 Error Page</span>
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              <Link to={"/login"}>
                                <span>Login Page</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/quickview"}>
                                <span>Quick View</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/newsletter"}>
                                <span>Newsletter</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="fl-custom-tabmenulink mega-menu">
                          {" "}
                          <Link to={" "} className="level-top">
                            <span>Custom</span>{" "}
                          </Link>
                          <div className="level0-wrapper fl-custom-tabmenu">
                            <div className="container">
                              <div className="header-nav-dropdown-wrapper clearer">
                                <div className="grid12-3">
                                  <div>
                                    <img
                                      src="/assets/img/custom-img1.jpg"
                                      alt="custom-imag"
                                    />
                                  </div>
                                  <h4 className="heading">Up to 70% Off</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                                <div className="grid12-3">
                                  <div>
                                    <img
                                      src="/assets/img/custom-img2.jpg"
                                      alt="custom-imag"
                                    />
                                  </div>
                                  <h4 className="heading">
                                    Big Sale - Get 50% oFF
                                  </h4>
                                  <p>
                                    Sed et quam lacus. Fusce condimentum
                                    eleifend enim a feugiat.
                                  </p>
                                </div>
                                <div className="grid12-3">
                                  <div>
                                    <img
                                      src="/assets/img/custom-img3.jpg"
                                      alt="custom-imag"
                                    />
                                  </div>
                                  <h4 className="heading">
                                    SALE UP TO 40% OFF
                                  </h4>
                                  <p>
                                    Sed et quam lacus. Fusce condimentum
                                    eleifend enim a feugiat.
                                  </p>
                                </div>
                                <div className="grid12-3">
                                  <div>
                                    <img
                                      src="/assets/img/custom-img4.jpg"
                                      alt="custom-imag"
                                    />
                                  </div>
                                  <h4 className="heading">
                                    Summer Sale! limited time
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* <!--nav--> */}
                    </div>
                  </nav>
                </div>

                {/* <!--row--> */}

                <div className="fl-header-right">
                  <div className="fl-links">
                    <div className="no-js">
                      {" "}
                      {/* <Link to="" title="Company" className="clicker"></Link> */}
                      <div className="fl-nav-links">
                        <div className="language-currency">
                          <div className="fl-language">
                            <ul className="lang">
                              <li>
                                <Link to={" "}>
                                  {" "}
                                  <img
                                    src="/assets/img/english.png"
                                    alt="English"
                                  />
                                  <span>English</span>{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={" "}>
                                  {" "}
                                  <img
                                    src="/assets/img/francais.png"
                                    alt="French"
                                  />
                                  <span>French</span>{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={" "}>
                                  {" "}
                                  <img
                                    src="/assets/img/german.png"
                                    alt="German"
                                  />
                                  <span>German</span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!--fl-language--> */}
                          {/* <!-- END For version 1,2,3,4,6 --> */}
                          {/* <!-- For version 1,2,3,4,6 --> */}
                          <div className="fl-currency">
                            <ul className="currencies_list">
                              <li>
                                <Link to={" "} title="EGP">
                                  {" "}
                                  £
                                </Link>
                              </li>
                              <li>
                                <Link to={" "} title="EUR">
                                  {" "}
                                  €
                                </Link>
                              </li>
                              <li>
                                <Link to={" "} title="USD">
                                  {" "}
                                  $
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!--fl-currency--> */}
                          {/* <!-- END For version 1,2,3,4,6 --> */}
                        </div>
                        <ul className="links">
                          <li>
                            <Link to={"/dashboard"} title="My Account">
                              My Account
                            </Link>
                          </li>
                          <li>
                            <Link to={"/wishlist"} title="Wishlist">
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to={"/checkout"} title="Checkout">
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link to={"/blog"} title="Blog">
                              <span>Blog</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link to={"/login"} title="Login">
                              <span>Login</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fl-cart-contain">
                    <div className="mini-cart">
                      <div className="basket">
                        {" "}
                        <Link to={"/shopping-cart"}>
                          <span> 2 </span>
                        </Link>{" "}
                      </div>
                      <div className="fl-mini-cart-content">
                        <div className="block-subtitle">
                          <div className="top-subtotal">
                            2 items, <span className="price">$259.99</span>{" "}
                          </div>
                          {/* <!--top-subtotal--> */}
                          {/* <!--pull-right--> */}
                        </div>
                        {/* <!--block-subtitle--> */}
                        <ul className="mini-products-list" id="cart-sidebar">
                          <li className="item first">
                            <div className="item-inner">
                              <Link
                                className="product-image"
                                title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                                to="#l"
                              >
                                <img
                                  alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                                  src="/assets/img/p4.jpg"
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
                                  <Link
                                    className="btn-edit"
                                    title="Edit item"
                                    to={" "}
                                  >
                                    <i className="icon-pencil"></i>
                                    <span className="hidden">Edit item</span>
                                  </Link>{" "}
                                </div>
                                {/* <!--access--> */}
                                <strong>1</strong> x{" "}
                                <span className="price">$179.99</span>
                                <p className="product-name">
                                  <Link to={"/product-details"}>
                                    Fresh Organic Mustard Leaves
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="item last">
                            <div className="item-inner">
                              <Link
                                className="product-image"
                                title="JP Lizzy Satchel Designer Diaper Bag - Slate Citron"
                                to={" "}
                              >
                                <img
                                  alt="JP Lizzy Satchel Designer Diaper Bag - Slate Citron"
                                  src="/assets/img/p3.jpg"
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
                                  <Link
                                    className="btn-edit"
                                    title="Edit item"
                                    to={" "}
                                  >
                                    <i className="icon-pencil"></i>
                                    <span className="hidden">Edit item</span>
                                  </Link>{" "}
                                </div>
                                {/* <!--access--> */}
                                <strong>1</strong> x{" "}
                                <span className="price">$80.00</span>
                                <p className="product-name">
                                  <Link to={"/product-details"}>
                                    Fresh Organic Mustard Leaves
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="actions">
                          <Link
                            to={"/checkout"}
                            className="btn-checkout"
                            title="Checkout"
                            type="button"
                          >
                            <span>Checkout</span>
                          </Link>
                        </div>
                        {/* <!--actions--> */}
                      </div>
                      {/* <!--fl-mini-cart-content--> */}
                    </div>
                  </div>
                  {/* <!--mini-cart--> */}
                  <div className="collapse navbar-collapse">
                    <form className="navbar-form" role="search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="input-group-btn">
                          <button type="submit" className="search-btn">
                            {" "}
                            <span className="glyphicon glyphicon-search">
                              {" "}
                              <span className="sr-only">Search</span>{" "}
                            </span>{" "}
                          </button>
                        </span>{" "}
                      </div>
                    </form>
                  </div>
                  {/* <!--links--> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
