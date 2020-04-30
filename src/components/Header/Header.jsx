import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
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
        <Link to="/login" className="login">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header
