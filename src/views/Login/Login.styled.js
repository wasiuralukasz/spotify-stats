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
export const Link = styled.a`
    background-color: #1ED761;
    border-radius: 500px;
    border: 0;
    padding-inline: 32px;
    padding-block: 8px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    /* transition: all .3s; */
 
    &:hover {
        transform: scale(1.04);
        cursor: pointer;
    }
`
