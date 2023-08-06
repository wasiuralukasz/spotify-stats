import "./assets/css/font.css";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashbpard/Dashboard";
import Center from "./components/Center/Center";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  });

  return (
    <Center>
        {!token ? <Login/> : <Dashboard/>}
    </Center>
  );
}

export default App;
