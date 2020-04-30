import React from "react"
import { connect } from "react-redux"
import Card from "components/Card/Card"
import "./DisplayProducts.scss"

const DisplayProducts = ({ products }) => {
  return (
    <div className="DisplayProducts" style={{ marginTop: "2rem" }}>
      {products.map((product) => (
        <Card
          key={Math.random().toString().slice(2)}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps)(DisplayProducts)
