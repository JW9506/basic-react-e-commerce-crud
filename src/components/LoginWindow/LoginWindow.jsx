import React from "react"
import useInput from "hooks/useInput"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { setCurrentUser } from "reduxStore/user"
import "./LoginWindow.scss"

const LoginWindow = ({ setCurrentUser }) => {
  const { state, changeHandler } = useInput("account", "password")
  const { account, password } = state
  const loginHandler = (e) => {
    e.preventDefault()
    setCurrentUser(state.account)
  }
  return (
    <div className="LoginWindow">
      <form className="form" onSubmit={loginHandler}>
        <div className="form-control">
          <label htmlFor="account">Account</label>
          <input
            type="text"
            id="account"
            name="account"
            value={account}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
})

export default connect(null, mapDispatchToProps)(LoginWindow)
