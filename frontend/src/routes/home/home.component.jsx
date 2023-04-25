import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../../components/product/product.component'
import { listProducts } from '../../actions/productActions'

const Home = () => {
  const dispatch = useDispatch()
  // productList should be the same name as it is listed in your store
  const productList = useSelector((state) => state.productList)
  // destructure and take the pieces we need
  const { loading, products, error } = productList

  // by dispatching listProducts we are dispatching PRODUCT_LIST_REQUEST in our actions
  // it was successful, so we pass the new data into the payload, finally with the help of
  // the productListReducer- our action.payload is being put into the products array
  // on a sucessful response

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  // to actual display the data from redux we will need to use useSelector

  return (
    <>
      <h1>latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Home
