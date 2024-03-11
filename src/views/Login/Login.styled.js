import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: auto;
    height: auto;
    background-color: #121212;
    margin: auto;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 50px 0;
`
export const Logo = styled.img`
    margin-right: 20px;
    width: 60px;
    height: 60px;
`

export const Title = styled.h1`
    display: flex;
    position: relative;
    color: #ffffff;
    font-size: 48px;
    font-weight: 500;
    margin: 0;

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
export const Link = styled.a`
    display: inline-block;
    background-color: transparent;
    border-radius: 500px;
    border: 1px solid #878787;
    //padding-inline: 80px;
    width: 100%;
    padding-block: 9px;
    color: #CCCCCC;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    //transition: all .1s;
 
    &:hover {
        border: 1px solid #ffffff;
        cursor: default;
    }
`
