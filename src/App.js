import React, { useEffect, useState } from "react";

import Login from "./pages/Login";

import GlobalStyles from "./styles/GlobalStyles";
import { getTokenFromUrl } from "./api/spotify";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const tokenUrl = hash.access_token;

    if (tokenUrl) {
      setToken(tokenUrl);
    }
  }, []);

  return (
    <>
      <h1>Spotify Clone</h1>
      {token ? "Logado" : <Login />}
      <GlobalStyles />
    </>
  );
}

export default App;
