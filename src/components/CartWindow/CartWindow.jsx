import React from "react"
import { cartItemsSelector, totalSelector } from "reduxStore/cart"
import { connect } from "react-redux"
import "./CartWindow.scss"

const CartWindow = ({ cartItems, total }) => {
  return (
    <div className="CartWindow">
      <div className="table">
        <div className="table-head">
          <span className="field">Name</span>
          <span className="field">Quantity</span>
          <span className="field">Price</span>
        </div>
        {cartItems.map((cartItem) => (
          <div key={Math.random()} className="table-row">
            <span>{cartItem.name}</span>
            <span>{cartItem.quantity}</span>
            <span>${cartItem.price}</span>
          </div>
        ))}
      </div>
      <span className="total">Total: ${total}</span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
  total: totalSelector(state),
})

export default connect(mapStateToProps)(CartWindow)
