import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
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
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('')
  const [inventory, setInventory] = useState([])

  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  useEffect(() => {
    const findInventory = async () => {
      const qty = await product.countInStock?.find((item) => item.size === size)
        .quantity
      setQty(qty)
      for (let i = 0; i < qty; i++) {
        inventory.push(i + 1)
      }
    }
    findInventory()
  }, [size])

  const addToCartHandler = () => {
    localStorage.setItem('itemSize', size)
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  const clearQuantity = () => {
    for (let i = qty; i > 0; i--) {
      inventory.splice(0, 1)
    }
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/' onClick={clearQuantity}>
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
              <ListGroupItem>Description: {product.description}</ListGroupItem>
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
                            clearQuantity()
                          }}
                        >
                          <option hidden>select size</option>
                          {product.countInStock.map(
                            (x) =>
                              x.quantity > 0 && (
                                <option key={x._id}>{x.size}</option>
                              )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                {product.countInStock && (
                  <ListGroupItem>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          onChange={() => {
                            clearQuantity()
                          }}
                        >
                          <option hidden>select quantity</option>
                          {inventory.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                          )
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                {product.countInStock && (
                  <ListGroupItem>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={qty === 0}
                      onClick={addToCartHandler}
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
