import React from "react";
import { Header, Logo, Title, Wrapper } from "./Login.styled";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/logo.svg";


const Login = () => {

    return (
        <Wrapper>
            <Header>
                <Logo src={ logo } alt="Logo aplikacji"/>
                <Title>hello</Title>
            </Header>
            <Button>
                Zaloguj
            </Button>
        </Wrapper>
    )
}

export default Login;