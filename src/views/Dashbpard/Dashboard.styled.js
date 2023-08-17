import styled from "styled-components";
import Button from "../../components/Button/Button";
import { ButtonWrapper } from "../../components/Button/Button.styled";

export const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  height: auto;
  background-color: #2b2d30;
  margin: auto;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  color: #ffffff;
`;

export const Header = styled.header`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

export const ProfileAvatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100%;
  margin: 15px;
`;
export const Arrow = styled.button`
  margin: 0 25px;
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
