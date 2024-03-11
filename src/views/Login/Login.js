import React from "react";
import { Header, Link, Logo, Title, Wrapper } from "./Login.styled";
import logo from "../../assets/images/logo.svg";
import { useEffect } from "react";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";


const Login = () => {

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPES ="playlist-read-private user-read-private user-read-email user-top-read";

    const {token, setToken} = useContext(LoginContext);

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
        <Wrapper>
          <div>
          <Header>
                <Logo src={ logo } alt="Logo aplikacji"/>
                <Title>hello</Title>
            </Header>
            <Link href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${SCOPES}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Log in
            </Link>
          </div>
        </Wrapper>
    )
}

export default Login;