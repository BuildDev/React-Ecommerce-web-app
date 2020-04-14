import React from "react";
import CustomButton from "../customButton/custtomButton";
import "./cart-dropdown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" id="style-4" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
