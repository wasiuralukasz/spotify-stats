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
  height: 34px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(68,68,68,14%);
  padding: 0px 18px;
  border-radius: 100px;
  width: 100%;
  margin: 0px 8px;
`

export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 100px;
  background-color: #262626;
`

export const UserAvatar = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 100%;
`;

export const UserName = styled.h1`
  font-size: 14px;
`

export const Arrow = styled.button`
  position: relative;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowImage = styled.img`
  width: 20px;
`;

export const ArrowMenu = styled.div`
  position: absolute;
  bottom: -50px;
  right: -8px;
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  background-color:rgba(0,0,0,0.5);
`

export const LogoutButton = styled(ButtonWrapper)`
    background-color: transparent;
    padding: 5px;
    width: 100%;
    text-align: left;
    border-radius: 5px;
    transition: all .3s;
    font-size: 12px;


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
          <Logo src={ logo } alt="Logo aplikacji" style={{'max-width': '34px', 'max-height': '34px'}}/>

        <UserInfoWrapper>
          <UserNameWrapper>
            <UserName>{data.display_name}</UserName>
          </UserNameWrapper>
          <UserAvatarWrapper>
            {data ? (
                <UserAvatar src={data.images[1].url} alt="Avatar" />
              ) : (
                <UserAvatar />
              )
            }
          </UserAvatarWrapper>
        </UserInfoWrapper>
         

          {/*
          <Arrow onClick={() => setShow(!show)}>
              <ArrowImage src={arrow} />
              {show && (
              <ArrowMenu>
                <LogoutButton onClick={logout}>Wyloguj</LogoutButton>
              </ArrowMenu>
            )}
            </Arrow>
          */}
      
      </HeaderWrapper>
    )
}

export default Header;