import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItems,
  removeItem,
} from "../../redux/cart/cart-actions";

const ChekoutItem = ({
  cartItem,
  clearItemFromCart,
  addItems,
  removeItem,
}) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <i
        className="fa fa-times remove-button"
        aria-hidden="true"
        onClick={() => clearItemFromCart(cartItem)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(ChekoutItem);
