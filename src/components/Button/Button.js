import React from "react";
import { ButtonWrapper } from "./Button.styled";

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <ButtonWrapper>{children}</ButtonWrapper>;
};
export default Button;
