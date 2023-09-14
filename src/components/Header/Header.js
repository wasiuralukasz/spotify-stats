import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";
import { Logo } from "../../views/Login/Login.styled";
import logo from "../../assets/images/logo.svg";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import { useState } from "react";
import useUserData from "../../hooks/useUserData";
import { ButtonWrapper } from "../../components/Button/Button.styled";



export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 15px;
`;

export const UserName = styled.h1`
  font-size: 24px;
`

export const Arrow = styled.button`
  margin-left: 25px;
  background-color: transparent;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowImage = styled.img`
  width: 40px;
`;

export const ArrowMenu = styled.div`
  position: absolute;
  bottom: -25px;
  right: 30px;
  width: 150px;
  padding: 5px;
  border-radius: 5px;
  background-color:rgba(0,0,0,0.5);
`

export const LogoutButton = styled(ButtonWrapper)`
    background-color: transparent;
    padding: 5px;
    width: 100%;
    height: 30px;
    text-align: left;
    border-radius: 5px;
    transition: all .3s;

    &:hover{
        transform: scale(1);
        background-color: rgba(255,255,255,0.25);
    }
`

const Header = () => {

    const URL = "https://api.spotify.com/v1/me";

    const { token, setToken } = useContext(LoginContext);
    //const [data, setData] = useState("");
    const [show, setShow] = useState(false);
  
    const data = useUserData(URL);
  
    const logout = () => {
      setToken("");
      window.localStorage.removeItem("token");
    };

    return (
        <HeaderWrapper>
        <Logo src={ logo } alt="Logo aplikacji"/>
        <UserInfoWrapper>
          {data ? (
            <UserAvatar src={data.images[1].url} alt="Avatar" />
          ) : (
            <UserAvatar />
          )}
          <UserName>{data.display_name}</UserName>
          <Arrow onClick={() => setShow(!show)}>
            <ArrowImage src={arrow} />
          </Arrow>
          {show && (
            <ArrowMenu>
              <LogoutButton onClick={logout}>Wyloguj</LogoutButton>
            </ArrowMenu>
          )}
        </UserInfoWrapper>
      </HeaderWrapper>
    )
}

export default Header;