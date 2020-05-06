import React from "react";
import "./checkout-page.scss";
import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart-selectors";
import ChekoutItem from "../../components/chekout-item/checkoutItem";
import StripeButton from "../../components/stripe-checkout/stripeChekoutButton";

const ChekoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <ChekoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp : date - cvv: 123
      </div>
      <div className="button">
        <StripeButton className="button" price={total} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(ChekoutPage);
