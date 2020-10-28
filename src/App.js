import React, { useEffect, useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { getTokenFromUrl } from "./api/spotify";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./pages/Login";
import Player from "./pages/Player";

import { useStateValue } from "./contexts/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const tokenUrl = hash.access_token;

    if (tokenUrl) {
      dispatch({
        type: "SET_TOKEN",
        token: tokenUrl,
      });

      spotify.setAccessToken(tokenUrl);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  console.log("Token", token);

  return (
    <>
      {token ? <Player /> : <Login />}
      <GlobalStyles />
    </>
  );
}

export default App;
