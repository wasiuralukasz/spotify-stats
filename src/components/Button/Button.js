import React from "react";
import { ButtonWrapper } from "./Button.styled";

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>;
};
export default Button;
