import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./Header.scss"

const Header = ({ currentUser }) => {
  return (
    <div className="Header">
      <div className="left">
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="right">
        <Link to="/products" className="products">
          Products
        </Link>
        <Link to="/cart" className="cart">
          Cart
        </Link>
        {currentUser ? (
          <span>Welcome, {currentUser}</span>
        ) : (
          <Link to="/login" className="login">
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
