import React, { useRef, useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { Redirect } from "react-router-dom"

import { setCurrentUser } from "reduxStore/user"
import useInput from "hooks/useInput"
import "./LoginWindow.scss"

const LoginWindow = ({ currentUser, setCurrentUser }) => {
  const firstInputRef = useRef(null)
  const { state, changeHandler, clearState } = useInput("account", "password")
  const { account, password } = state

  const loginHandler = (e) => {
    e.preventDefault()
    setCurrentUser(state.account)
    clearState()
  }

  useEffect(() => {
    firstInputRef.current.focus()
  }, [])

  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <div className="LoginWindow">
      <form className="form" onSubmit={loginHandler}>
        <div className="form-control">
          <label htmlFor="account">Account</label>
          <input
            ref={firstInputRef}
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow)
