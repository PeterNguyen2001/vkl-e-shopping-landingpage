import React, { Component, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MiniCartContent from './header.miniCart'
// import $ from 'jquery';

// import {} from 'react-router-dom'

export default function Header() {
  const listCategory = useSelector((state) => state.category.listCategory || [])
  useEffect(() => {
    // window.commonjs();
  }, [])
  return (
    <>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='container'>
              <div className='row'>
                <div className='header-banner'>
                  <div className='assetBlock'>
                    <div id='slideshow'>
                      <p>
                        Special Offers! - Get <span>50%</span> off on all books{' '}
                      </p>
                      <p>
                        sale <span>40%</span> of on bulk shopping!{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='header'>
          <div className='container'>
            <div className='header-container row'>
              <div className='logo'>
                {' '}
                <Link to={'/'} title='index'>
                  <div>
                    <img src='/assets/img/logo.png' alt='logo' />
                  </div>
                </Link>{' '}
              </div>
              <div className='fl-nav-menu'>
                <nav>
                  <div className='mm-toggle-wrap'>
                    <div className='mm-toggle'>
                      <i className='icon-align-justify'></i>
                      <span className='mm-label'>Menu</span>{' '}
                    </div>
                  </div>
                  <div className='nav-inner'>
                    {/* <!-- BEGIN NAV --> */}
                    <ul id='nav' className='hidden-xs'>
                      <li>
                        {' '}
                        <Link className='level-top' to={'/'}>
                          <span>TRANG CHỦ</span>
                        </Link>
                      </li>
                      <li className='level0 parent drop-menu'>
                        <Link to={' '}>
                          <span>CỬA HÀNG</span>{' '}
                        </Link>
                        {/* <!--sub sub category--> */}
                        <ul className='level1'>
                          <li className='level1 first'>
                            <Link to={'/grid'}>
                              <span>Product Grid</span>
                            </Link>
                          </li>
                          <li className='level1 nav-10-4'>
                            {' '}
                            <Link to={'/shopping-cart'}>
                              {' '}
                              <span>Cart Page</span>{' '}
                            </Link>{' '}
                          </li>
                          <li className='level1 first parent'>
                            <Link to={'/checkout'}>
                              <span>Checkout</span>
                            </Link>
                          </li>
                          <li className='level1'>
                            {' '}
                            <Link to={'/dashboard'}>
                              {' '}
                              <span>Dashboard</span>
                            </Link>{' '}
                          </li>
                          <li className='level1'>
                            {' '}
                            <Link to={'/about-us'}>
                              {' '}
                              <span>About us</span>{' '}
                            </Link>
                          </li>
                          <li className='level1'>
                            <Link to={'/contact-us'}>
                              <span>Contact us</span>
                            </Link>
                          </li>
                          <li className='level1'>
                            <Link to={'/login'}>
                              <span>Login Page</span>
                            </Link>
                          </li>
                          <li className='level1'>
                            <Link to={'/register'}>
                              <span>Register page</span>
                            </Link>
                          </li>
                          <li className='level1'>
                            <Link to={'/userorder'}>
                              <span>User Order</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        {' '}
                        <Link className='level-top' to={'/about-us'}>
                          <span>VỀ CHÚNG TÔI</span>
                        </Link>
                      </li>
                      <li>
                        {' '}
                        <Link className='level-top' to={'/contact-us'}>
                          <span>LIÊN HỆ</span>
                        </Link>
                      </li>
                    </ul>
                    {/* <!--nav--> */}
                  </div>
                </nav>
              </div>

              {/* <!--row--> */}

              <div className='fl-header-right'>
                <div className='fl-links'>
                  <div className='no-js'>
                    {' '}
                    {/* <Link to="" title="Company" className="clicker"></Link> */}
                    <div className='fl-nav-links'>
                      <div className='language-currency'>
                        <div className='fl-language'>
                          <ul className='lang'>
                            <li>
                              <Link to={' '}>
                                {' '}
                                <img
                                  src='/assets/img/english.png'
                                  alt='English'
                                />
                                <span>English</span>{' '}
                              </Link>
                            </li>
                            <li>
                              <Link to={' '}>
                                {' '}
                                <img
                                  src='/assets/img/francais.png'
                                  alt='French'
                                />
                                <span>French</span>{' '}
                              </Link>
                            </li>
                            <li>
                              <Link to={' '}>
                                {' '}
                                <img
                                  src='/assets/img/german.png'
                                  alt='German'
                                />
                                <span>German</span>{' '}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!--fl-language--> */}
                        {/* <!-- END For version 1,2,3,4,6 --> */}
                        {/* <!-- For version 1,2,3,4,6 --> */}
                        <div className='fl-currency'>
                          <ul className='currencies_list'>
                            <li>
                              <Link to={' '} title='EGP'>
                                {' '}
                                £
                              </Link>
                            </li>
                            <li>
                              <Link to={' '} title='EUR'>
                                {' '}
                                €
                              </Link>
                            </li>
                            <li>
                              <Link to={' '} title='USD'>
                                {' '}
                                $
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!--fl-currency--> */}
                        {/* <!-- END For version 1,2,3,4,6 --> */}
                      </div>
                      <ul className='links'>
                        <li>
                          <Link to={'/dashboard'} title='My Account'>
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link to={'/wishlist'} title='Wishlist'>
                            Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to={'/checkout'} title='Checkout'>
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link to={'/blog'} title='Blog'>
                            <span>Blog</span>
                          </Link>
                        </li>
                        <li className='last'>
                          <Link to={'/login'} title='Login'>
                            <span>Login</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <MiniCartContent />
                {/* <!--mini-cart--> */}
                <div className='collapse navbar-collapse'>
                  <form className='navbar-form' role='search'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search'
                      />
                      <span className='input-group-btn'>
                        <button type='submit' className='search-btn'>
                          {' '}
                          <span className='glyphicon glyphicon-search'>
                            {' '}
                            <span className='sr-only'>Search</span>{' '}
                          </span>{' '}
                        </button>
                      </span>{' '}
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
  )
}
