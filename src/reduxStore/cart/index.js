import { createSlice, createSelector } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { addThisProductToCart } from "reduxStore/product"

/*
  type cart = {
    cartItems: Array<Product & {quantity: number}>
  }
*/

const cart = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addThisProductToCart, (state, action) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      )
      if (cartItem) {
        cartItem.quantity++
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    })
  },
})

export const cartItemsSelector = (state) => state.cart.cartItems
export const totalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
)

export const { reducer } = cart
