import React from "react"
import STATIC_PICTURE from "static/static_pic.jpg"
import "./Card.scss"

const Card = ({ name, price, ...otherProps }) => {
  return (
    <div className="Card" {...otherProps}>
      <img className="picture" src={STATIC_PICTURE} alt="scenary" />
      <div className="more">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
    </div>
  )
}

export default Card
