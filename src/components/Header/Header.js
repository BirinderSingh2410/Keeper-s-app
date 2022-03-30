import React from "react";
import styled from "styled-components";

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
`;
const Heading = styled.h1`
  color: white;
  margin-left: 6%;
  padding-top: 1%;
  font-size: 70px;
  font-family: monospace;
`;
const Header = () => {
  return (
    <HeaderBox>
      <Heading>Tasks</Heading>
    </HeaderBox>
  );
};

export default Header;
