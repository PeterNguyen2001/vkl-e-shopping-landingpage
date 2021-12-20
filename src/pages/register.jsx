import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../layout/header'
import Footer from '../layout/footer'
import axiosClient from '../app/axiosClient'

function Register() {
  const history = useHistory()
  var [username, setUserName] = useState()
  var [password, setPassWord] = useState()
  function handleRegister() {
    var user = { email: username, username, password }
    axiosClient
      .post('/api/auth/register', user)
      .then((res) => localStorage.setItem('user', JSON.stringify(user)))
    history.push('/login')
  }
  return (
    <>
      <Header />

      <div className='main-container col1-layout wow bounceInUp animated animated'>
        <div className='main'>
          <div className='account-login container'>
            {/* <!--page-title--> */}

            <div id='login-form'>
              <input name='form_key' type='hidden' value='EPYwQxF6xoWcjLUr' />
              <fieldset className='col2-set'>
                <div className='col-1 new-users'>
                  <strong>Already Customers</strong>
                  <div className='content'>
                    <div className='buttons-set'>
                      <button
                        type='button'
                        title='Create an Account'
                        className='button create-account'
                        onClick=''
                      >
                        <span>
                          <span>
                            <Link to='/login'>Back to Log In</Link>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-2 registered-users'>
                  <strong>Registered Customers</strong>
                  <div className='content'>
                    <p>If you have an account with us, please log in.</p>
                    <ul className='form-list'>
                      <li>
                        <label for='email'>
                          Email Address<em className='required'>*</em>
                        </label>
                        <div className='input-box'>
                          <input
                            type='text'
                            name='login[username]'
                            id='email'
                            className='input-text required-entry validate-email'
                            title='Email Address'
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </li>
                      <li>
                        <label for='pass'>
                          Password<em className='required'>*</em>
                        </label>
                        <div className='input-box'>
                          <input
                            type='password'
                            name='login[password]'
                            className='input-text required-entry validate-password'
                            id='pass'
                            title='Password'
                            value={password}
                            onChange={(e) => setPassWord(e.target.value)}
                          />
                        </div>
                      </li>
                    </ul>
                    {/* <div className='remember-me-popup'>
                        <div className='remember-me-popup-head'>
                          <h3 id='text2'>What's this?</h3>
                          <Link
                            to={' '}
                            className='remember-me-popup-close'
                            onClick='showDiv()'
                            title='Close'
                          >
                            Close
                          </Link>
                        </div>
                        <div className='remember-me-popup-body'>
                          <p id='text1'>
                            Checking "Remember Me" will let you access your
                            shopping cart on this computer when you are logged
                            out
                          </p>
                          <div className='remember-me-popup-close-button a-right'>
                            <Link
                              to={' '}
                              className='remember-me-popup-close button'
                              title='Close'
                              onClick='
            showDiv()'
                            >
                              <span>Close</span>
                            </Link>
                          </div>
                        </div>
                      </div> */}

                    <p className='required'>* Required Fields</p>

                    <div className='buttons-set'>
                      <button
                        className='button login'
                        name='send'
                        id='send2'
                        onClick={handleRegister}
                      >
                        <span>Register</span>
                      </button>
                    </div>
                    {/* <!--buttons-set--> */}
                  </div>
                  {/* <!--content--> */}
                </div>
                {/* <!--col-2 registered-users--> */}
              </fieldset>
              {/* <!--col2-set--> */}
            </div>
          </div>
          {/* <!--account-login--> */}
        </div>
        {/* <!--main-container--> */}
      </div>
      {/* <!--col1-layout--> */}

      <div className='container'>
        <div className='row our-features-box'>
          <ul>
            <li>
              <div className='feature-box'>
                <div className='icon-truck'></div>
                <div className='content'>FREE SHIPPING on order over $99</div>
              </div>
            </li>
            <li>
              <div className='feature-box'>
                <div className='icon-support'></div>
                <div className='content'>
                  Have a question?
                  <br />
                  +1 800 789 0000
                </div>
              </div>
            </li>
            <li>
              <div className='feature-box'>
                <div className='icon-money'></div>
                <div className='content'>100% Money Back Guarantee</div>
              </div>
            </li>
            <li>
              <div className='feature-box'>
                <div className='icon-return'></div>
                <div className='content'>30 days return Service</div>
              </div>
            </li>
            <li className='last'>
              <div className='feature-box'>
                {' '}
                <Link to={' '}>
                  <i className='fa fa-apple'></i> download
                </Link>{' '}
                <Link to={' '}>
                  <i className='fa fa-android'></i> download
                </Link>{' '}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register
