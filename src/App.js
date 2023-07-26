import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token" 
  const SCOPES ="playlist-read-private user-read-private user-read-email"
  
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const fetchUserData = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    console.log(data);
  }

  return (
    <div className="App">
          <header className="App-header">
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${SCOPES}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
                  <button onClick={fetchUserData}>Click</button>
          </header>
      </div>
  );
}

export default App;
