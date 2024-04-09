import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 1100px;
  height: auto;
  background: linear-gradient(#202020, #121212);
  margin: auto;
  //padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
`;
