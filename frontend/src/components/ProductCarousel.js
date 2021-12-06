import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='light'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-white my-4'>
      {products.map((product) => (
        <Carousel.Item key={product._id} className="mt-5 mb-2">
          <Link to={`/products/${product._id}`}>
            <Image className='d-block w-100' src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption text-center'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel