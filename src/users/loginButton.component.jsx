import React from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";
import "./loginButton.style.css";

const LogInButton = () => {
  return (
    <div className="sign-in-btn-container">
      <button type="button" className="sign-in-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};

export default LogInButton;
