import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../../views/Login/Login.styled";
import logo from "../../assets/images/logo.svg";

export const Wrapper = styled.div`
    height: 100%;
    background-color: #121212;
    display: block;
    grid-column: 1 / 4;
    grid-row: 1 / 3;
    border-top-left-radius: 8px;
    padding: 12px 0 0 24px;
`

const Sidebar = () => {

    return(
        <Wrapper>
            <Logo src={ logo } alt="Logo aplikacji" style={{'max-width': '34px', 'max-height': '34px'}}/>
            
        </Wrapper>
    );
};

export default Sidebar;