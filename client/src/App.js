import "./assets/css/font.css";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashbpard/Dashboard";
import Center from "./components/Center/Center";
import LoginContext from "./contexts/LoginContext"

function App() {
  const [token, setToken] = useState("");

  return (
    <LoginContext.Provider value={{token, setToken}}>
      <Center>
        {!token ? <Login/> : <Dashboard/>}
      </Center>
    </LoginContext.Provider>
  );
}

export default App;
