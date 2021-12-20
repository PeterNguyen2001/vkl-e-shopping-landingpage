import React, { useState, useEffect } from 'react'
import axiosClient from '../app/axiosClient'
import { Link } from 'react-router-dom'
import Header from '../layout/header'
import './checkout'
import './userorder.css'
import Footer from '../layout/footer'
const UserOrder = () => {
  var user = JSON.parse(localStorage.getItem('user'))
  var [order, setOrder] = useState([])
  useEffect(() => {
    axiosClient
      .get(`/api/orders?userId=${user.id}`)
      .then((res) => setOrder(res))
  }, [])
  return (
    <div>
      <Header />

      <div className='page-heading'>
        <div className='breadcrumbs'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <ul>
                  <li className='home'>
                    {' '}
                    <Link to={'/'} title='Go to Home Page'>
                      Home
                    </Link>{' '}
                    <span>&rsaquo;</span>{' '}
                  </li>
                  <li className='category1601'>
                    {' '}
                    <strong>User Order</strong>{' '}
                  </li>
                </ul>
              </div>

              {/* <!--col-xs-12--> */}
            </div>

            {/* <!--row--> */}
          </div>

          {/* <!--container--> */}
        </div>
        <div className='page-title'>
          <h2>USER ORDER</h2>
        </div>
      </div>
      <table className='content-table'>
        <thead>
          <tr>
            <th class='text-center'>First Name</th>
            <th class='text-center'>Last Name</th>
            <th class='text-center'>Address</th>
            <th class='text-center'>City</th>

            <th class='text-center'>Status</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((e) => (
            <tr key={e.id}>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.address}</td>
              <td>{e.city}</td>
              <td>{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer></Footer>
    </div>
  )
}

export default UserOrder
