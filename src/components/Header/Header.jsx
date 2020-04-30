import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { toggleUserProfile } from "reduxStore/globalState"
import UserProfileDropdown from "components/UserProfileDropdown/UserProfileDropdown"
import "./Header.scss"

const Header = ({ currentUser, isUserProfileOpened, toggleUserProfile }) => {
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
          <div className="loggedin-user">
            <span onClick={() => toggleUserProfile()}>
              Welcome, {currentUser}
            </span>
            {isUserProfileOpened && <UserProfileDropdown />}
          </div>
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
  isUserProfileOpened: state.global.isUserProfileOpened,
})

const mapDispatchToProps = (dispatch) => ({
  toggleUserProfile: bindActionCreators(toggleUserProfile, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
