import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchListProductBestSeller } from '../../app/redux/productSlice'
import queryString from 'query-string'
import { CalculateCart, increaseItemToCart } from '../../app/redux/cartSlice'

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function BestSeller() {
  const dispatch = useDispatch()
  const listProductBestSeller = useSelector(
    (state) => state.product.listProduct
  )

  console.log('listBeseller - homepage.bestseller: ', listProductBestSeller)

  useEffect(() => {
    dispatch(fetchListProductBestSeller({}))
  }, [])
  useEffect(() => {
    console.log('list', listProductBestSeller)
  }, [listProductBestSeller])

  function BestSellerCarousel() {
    useEffect(() => {
      window.commonjs()
    }, [])
    return (
      <>
        <div id='best-seller' className='product-flexslider hidden-buttons'>
          <div className='slider-items slider-width-col4 products-grid'>
            {listProductBestSeller?.map((product, index) => (
              <div className='item' key={index}>
                <div className='item-inner'>
                  <div className='item-img'>
                    <div className='item-img-info'>
                      <Link
                        to={`/product-details/${product.id}`}
                        title='Fresh Organic Mustard Leaves '
                        className='product-image'
                      >
                        <img
                          style={{ width: '270px', height: '270px' }}
                          src={product.image}
                          alt={product.name}
                        />
                      </Link>
                      <div className='new-label new-top-left'>Hot</div>
                      <div className='sale-label sale-top-left'>-15%</div>
                      <div className='item-box-hover'>
                        <div className='box-inner'>
                          <div className='product-detail-bnt'>
                            <Link to='/' className='button detail-bnt'>
                              <span>Quick view</span>
                            </Link>
                          </div>
                          <div className='actions'>
                            <span className='add-to-links'>
                              <Link
                                to='/'
                                className='link-wishlist'
                                title='Add to Wishlist'
                              >
                                <span>Add to cart</span>
                              </Link>{' '}
                              <Link
                                to='/'
                                className='link-compare add_to_compare'
                                title='Add to Compare'
                              >
                                <span>Add to Compare</span>
                              </Link>
                            </span>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='add_cart'>
                      <button
                        onClick={() => {
                          dispatch(increaseItemToCart({ product, quantity: 1 }))
                          dispatch(CalculateCart())
                        }}
                        className='button btn-cart'
                        type='button'
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                  <div className='item-info'>
                    <div className='info-inner'>
                      <div className='item-title'>
                        <Link
                          to={`/product-details/${product.id}`}
                          title='Best book ever '
                        >
                          {product.name}{' '}
                        </Link>{' '}
                      </div>
                      <div className='item-content'>
                        <div className='rating'>
                          <div className='ratings'>
                            <div className='rating-box'>
                              <div className='rating'></div>
                            </div>
                            <p className='rating-links'>
                              <Link to='/'>1 Review(s)</Link>{' '}
                              <span className='separator'>|</span>{' '}
                              <Link to='/'>Add Review</Link>
                            </p>
                          </div>
                        </div>
                        <div className='item-price'>
                          <div className='price-box'>
                            <span className='regular-price'>
                              <span className='price'>
                                {numberWithSpaces(product.price)}
                                {' VND'}
                              </span>{' '}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <BestSellerCarousel />
    </>
  )
}
