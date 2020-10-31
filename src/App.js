import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase/firebase.utils";
import LogInButton from "./users/loginButton.component";
import LogOutButton from "./users/logoutButton.component";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      console.log(userAuth);
    });
  }, [user]);

  return <div className="App">{user ? <LogOutButton /> : <LogInButton />}</div>;
}

export default App;
