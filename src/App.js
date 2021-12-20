import React, { Component, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from './pages/index'
import Error404 from './pages/404error'
import About from './pages/about-us'
import Blog from './pages/blog-detail'
import BlogDetails from './pages/blog'
import List from './pages/list'
import ProductPage from './pages/ProductPage'
import ProductPage2 from './pages/grid'
import Login from './pages/login'
import Register from './pages/register'
import MultipleAddresses from './pages/multiple-addresses'
import ProductDetails from './pages/product-details'
import ShoppingCart from './pages/shopping-cart'
import Wishlist from './pages/wishlist'
import CheckoutMethod from './pages/checkout-method'
import Checkout from './pages/checkout'
import ContactUs from './pages/contact-us'
import Dashboard from './pages/dashboard'
import Newsletter from './pages/newsletter'
import QuickView from './pages/quickview'
import LoadingPage from './pages/component/loadingPage/loadingPage'
import { CalculateCart, restoreCart } from './app/redux/cartSlice'
import { useDispatch } from 'react-redux'
import { fetchListCategory } from './app/redux/categorySlice'
import { loadCitiesData } from './app/redux/addressSlice'
import UserOrder from './pages/userorder'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(restoreCart())
    dispatch(fetchListCategory())
    dispatch(CalculateCart())
    dispatch(loadCitiesData())
  }, [])
  return (
    <BrowserRouter>
      <LoadingPage />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/404error' component={Error404} />
        <Route exact path='/product' component={ProductPage} />
        <Route path='/product/:id' component={ProductPage} />
        <Route path='/product-details/:id' component={ProductDetails} />
        <Route path='/about-us' component={About} />
        <Route path='/userorder' component={UserOrder} />
        <Route path='/blog-detail' component={Blog} />
        <Route path='/blog' component={BlogDetails} />
        <Route path='/list' component={List} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/multiple-addresses' component={MultipleAddresses} />
        <Route path='/shopping-cart' component={ShoppingCart} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/checkout-method' component={CheckoutMethod} />
        <Route path='/checkout' component={CheckoutMethod} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/newsletter' component={Newsletter} />
        <Route path='/quickview' component={QuickView} />
        <Route path='/grid' component={ProductPage2} />
      </Switch>
    </BrowserRouter>
  )
}
