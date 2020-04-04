import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shopePage/shopePage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-up-page/signIn-signUp-Page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubsucribeFromAuth = null;

  componentDidMount() {
    this.unsubsucribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubsucribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header user={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
