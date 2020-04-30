import React from "react"
import ManageProduct from "components/ManageProduct/ManageProduct"
import DisplayProducts from "components/DisplayProducts/DisplayProducts"

const ProductPage = () => {
  return (
    <div className="ProductPage">
      <h3 style={{ textAlign: "center" }}>ProductPage</h3>
      <ManageProduct />
      <DisplayProducts />
    </div>
  )
}

export default ProductPage
