import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
    //   console.log(item.countInStock[0].size)
      const existItem = state.cartItems.find((x) => x.product === item.product)
      const existSize = state.cartItems.find((y) => y.countInStock[0].size = item.countInStock[0].size )
      console.log(existSize)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    default:
      return state
  }
}
