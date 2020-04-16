import React from "react";
import CustomButton from "../customButton/custtomButton";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cartItem";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" id="style-4">
        {cartItems.map((cartItem) => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
