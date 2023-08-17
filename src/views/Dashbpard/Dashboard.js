import React from "react";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  Wrapper,
  ProfileAvatar,
  Header,
  Arrow,
  ArrowImage,
  ArrowMenu,
  LogoutButton,
} from "./Dashboard.styled";
import useUserData from "../../hooks/useUserData";
import arrow from "../../assets/images/arrow.svg";

const Dashboard = () => {
  const url = "https://api.spotify.com/v1/me";

  const { token, setToken } = useContext(LoginContext);
  //const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  const data = useUserData(url);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Wrapper>
      <Header>
        {data ? (
          <ProfileAvatar src={data.images[1].url} alt="Avatar" />
        ) : (
          <ProfileAvatar />
        )}
        <h1>{data.display_name}</h1>
        <Arrow onClick={() => setShow(!show)}>
          <ArrowImage src={arrow} />
        </Arrow>
        {show && (
          <ArrowMenu>
            <LogoutButton onClick={logout}>Wyloguj</LogoutButton>
          </ArrowMenu>
        )}
      </Header>
    </Wrapper>
  );
};

export default Dashboard;
