import React from "react";
import "./sign-in-sign-up.scss";
import SignIn from "../../components/sign-in/signIn";
import SignUp from "../../components/sign-up/signUp";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
