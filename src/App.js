import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, settoken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash);
    window.location.hash = "";
    const _token = hash.access_token;
    console.log(_token);

    if (_token) {
      settoken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("user name", user);
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <h1> I am Logged in </h1> : <Login />}
      {/* Spotify Logo */}
      {/* Spotify Login Button */}
    </div>
  );
}

export default App;
