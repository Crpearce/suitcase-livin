import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
  Button,
  Form,
} from 'react-bootstrap'
import Rating from '../../components/rating/rating.component'
import { listProductDetails } from '../../actions/productActions'
import Loader from '../../components/loader/loader.component'
import Message from '../../components/message/message.component'

const ProductScreen = () => {
  const [qty, setQty] = useState(0)
  const [size, setSize] = useState('')

  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product, error } = productDetails
  const params = useParams()

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  useEffect(() => {}, [])

  console.log(size)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price: ${product.price}</ListGroupItem>
              <ListGroupItem>Description: ${product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock && (
                  <ListGroupItem>
                    <Row>
                      <Col>Size</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={size}
                          onChange={(e) => {
                            setSize(e.target.value)
                          }}
                        >
                          <option hidden >select size</option>
                          {product.countInStock.map(
                            (product) =>
                              product.quantity > 0 && (
                                <option key={product._id}>
                                  {product.size}
                                </option>
                              )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                {/* {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>QTY</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {
                          [...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))
                          }
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )} */}
                {product.countInStock && (
                  <ListGroupItem>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock.quantity === 0}
                    >
                      ADD TO CART
                    </Button>
                  </ListGroupItem>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
