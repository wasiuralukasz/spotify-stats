import React from "react";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Wrapper, ProfileAvatar, Header } from "./Dashboard.styled";

const Dashboard = () => {
  const { token, setToken } = useContext(LoginContext);
  const [data, setData] = useState("");
  const url = "https://api.spotify.com/v1/me";

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data);
      console.log(data);
    };

    fetchUserData();
  }, []);

  return (
    <Wrapper>
      <Header>
        <h1>Hello, {data.display_name}</h1>
        {(data) ? <ProfileAvatar src={data.images[1].url} alt="Avatar" /> : <ProfileAvatar/>}
      </Header>
      <Button onClick={logout}>Wyloguj</Button>
    </Wrapper>
  );
};

export default Dashboard;
