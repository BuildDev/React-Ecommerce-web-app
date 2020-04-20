import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart-actions";

const ChekoutItem = ({ cartItem, clearItemFromCart }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <i
        className="fa fa-times remove-button"
        aria-hidden="true"
        onClick={() => clearItemFromCart(cartItem)}
      />
    </div>
  );
};

export default connect(null, { clearItemFromCart })(ChekoutItem);
