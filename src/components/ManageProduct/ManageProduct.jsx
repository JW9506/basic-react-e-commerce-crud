import React, { useRef } from "react"
import { connect } from "react-redux"
import { addProduct } from "reduxStore/product"
import { bindActionCreators } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"

import useInput from "hooks/useInput"
import "./ManageProduct.scss"

const ManageProduct = ({ products, addProduct }) => {
  const productNameInputRef = useRef(null)
  const { state, changeHandler, clearState } = useInput(
    "name",
    "price",
    "continent"
  )
  const { name, price, continent } = state
  const formSubmitHandler = (e) => {
    e.preventDefault()
    addProduct({ id: uuid(), name, price, continent, images: [] })
    clearState()
    productNameInputRef.current.focus()
  }
  return (
    <div className="ManageProduct">
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Product Name</label>
          <input
            ref={productNameInputRef}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="continent">Continent</label>
          <input
            type="text"
            id="continent"
            name="continent"
            value={continent}
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  addProduct: bindActionCreators(addProduct, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct)
