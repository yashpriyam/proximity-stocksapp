import React from "react";
import { auth } from "../firebase/firebase.utils";
import "./logoutButton.style.css";

const LogOutButton = () => {
  return (
    <div className="sign-out-btn-container">
      <button
        type="button"
        className="sign-out-btn"
        onClick={() => auth.signOut()}
      >
        SignOut
      </button>
    </div>
  );
};

export default LogOutButton;
