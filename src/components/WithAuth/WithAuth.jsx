import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

const WithAuth = (Component) => {
  return connect(mapStateToProps)(({ currentUser, ...restProps }) =>
    currentUser ? <Component {...restProps} /> : <Redirect to="/login" />
  )
}

export default WithAuth
