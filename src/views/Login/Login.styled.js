import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: auto;
    background-color: #2B2D30;
    margin: auto;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
`

export const Header = styled.header`
    display: flex;    
`
export const Logo = styled.img`
    margin-right: 20px;
`

export const Title = styled.h1`
    display: flex;
    position: relative;
    color: #ffffff;
    font-size: 48px;
    font-weight: 500;

    &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 50px;
        background-color: #ffffff;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
    }
`

