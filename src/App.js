import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shopePage/shopePage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-up-page/signIn-signUp-Page";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";
import ChekoutPage from "./pages/checkoutPage/checkoutPage";
import { selectCollectionsForPreview } from "./redux/shop/shop-selectors";

class App extends Component {
  unsubsucribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubsucribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(user);
      
    });
  }

  componentWillUnmount() {
    this.unsubsucribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={ChekoutPage} />
          <Route
            path="/sign-in"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  collectionsArray: selectCollectionsForPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
