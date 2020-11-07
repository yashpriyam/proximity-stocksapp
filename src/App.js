import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./homepage/homePage.component";
import LogInButton from "./users/loginButton.component";
import { AppStateProvider } from "./appState/globalState.context";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      // console.log(userAuth);
    });
  }, [user]);

  return (
    <div className="App">
      {user ? (
        <AppStateProvider>
          <HomePage />
        </AppStateProvider>
      ) : (
        <LogInButton />
      )}
    </div>
  );
}

export default App;
