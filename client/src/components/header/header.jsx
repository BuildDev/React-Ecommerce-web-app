import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cartIcon";
import CartDropDown from "../cart-dropdown/cartDropDown";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectHiddenCart } from "../../redux/cart/cart-selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="container-logo" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHiddenCart(state),
});

export default connect(mapStateToProps)(Header);
