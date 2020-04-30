import React, { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { logOut } from "reduxStore/user"
import { toggleUserProfile } from "reduxStore/globalState"
import "./UserProfileDropdown.scss"

const UserProfileDropdown = ({ logOut, toggleUserProfile }) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.target.matches(".UserProfileDropdown *")) return
      toggleUserProfile()
    }
    document.body.addEventListener("click", listener, false)
    return () => {
      document.body.removeEventListener("click", listener, false)
    }
  }, [toggleUserProfile])
  return (
    <div className="UserProfileDropdown">
      <span onClick={() => logOut()}>Logout</span>
      <span>My Profile</span>
      <span>Change Password</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  logOut: bindActionCreators(logOut, dispatch),
  toggleUserProfile: bindActionCreators(toggleUserProfile, dispatch),
})

export default connect(null, mapDispatchToProps)(UserProfileDropdown)
