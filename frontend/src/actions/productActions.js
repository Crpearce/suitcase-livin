import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

// instead of fetching the data in our homescreen component, we want to do it here
// through our action

// think of these funtcions as action creators, while we can think of the PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,
// PRODUCT_LIST_FAIL, as the actual actions

// to make our request async will utilize redux thunk, by using dispatch we can trigger or dispatch the actions
// make the request, if sucessfull take and destructure the data with the payload

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
