import React from "react";
import styled from "styled-components";
import { signOutFromGoogle } from "../../Firebase/Firebase";

const HeaderBox = styled.div`
  width: 100%;
  height: 20vh;
  background: rgb(0, 110, 103);
  background: linear-gradient(
    156deg,
    rgba(0, 110, 103, 1) 0%,
    rgba(251, 255, 164, 1) 100%
  );
  box-shadow: 11px 7px 32px darkgrey;
  border-bottom-right-radius: 2vw;
  border-bottom-left-radius: 2vw;
  display:flex;
  justify-content:space-around;
`;

const LogOut = styled.button`
    border: 2px solid #005e63;
    background-color:transparent;
    width: 12vw;
    border-radius: 6px;
    font-size: 1em;
    height: 40px;
    font-weight: 600;
    border: 3px solid #005e63;
    margin-top:3vh;
    :hover{
      background-color:#005e63;
      color:white;
      cursor:pointer;
    }
`
const Heading = styled.h1`
  color: white;
  font-size: 6em;
  font-family: monospace;
`;
const Header = () => {
  return (
    <HeaderBox>
      <Heading>Tasks</Heading>
      <LogOut onClick={signOutFromGoogle}>Log Out</LogOut>
    </HeaderBox>
  );
};

export default Header;
