import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledFooter = styled.div`
  position: absolute;
  width: 100vw;
  height: 25%;
  bottom: 0;
  background-color: ${theme.colors.main_black};
`;

function Footer() {
  return <StyledFooter></StyledFooter>;
}

export default Footer;
