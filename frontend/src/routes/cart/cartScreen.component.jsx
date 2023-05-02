import { useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from "../../components/message/message.component";
import { addToCart } from "../../actions/cartActions";

const CartScreen = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const id = params.id 

        console.log(location)
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    console.log('qty 2: ', qty)

    useEffect(() => {
        console.log(id)
        if(id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty]);


    return (
        <div>
            Cart
        </div>
    );
}

export default CartScreen;
