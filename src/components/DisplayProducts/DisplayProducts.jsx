import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import Card from "components/Card/Card"
import { addThisProductToCart } from "reduxStore/product"
import "./DisplayProducts.scss"

const DisplayProducts = ({ products, addThisProductToCart }) => {
  return (
    <div className="DisplayProducts" style={{ marginTop: "2rem" }}>
      {products.map((product) => (
        <Card
          key={Math.random().toString().slice(2)}
          name={product.name}
          price={product.price}
          onClick={() => addThisProductToCart(product)}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
  addThisProductToCart: bindActionCreators(addThisProductToCart, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProducts)
