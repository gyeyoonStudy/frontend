import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

import { Input } from "../Input";

const StyledContainer = styled.div`
  position: relative;
  width: 50%;
  height: 70%;
  margin: 0 auto;
  background-color: ${theme.colors.light_gray};
  border-radius: 1rem;
`;

const StyledBlock = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.main_blue};
  border-radius: 1rem 0rem 0rem 1rem;
  float: left;
`;

function SignUpBox() {
  return (
    <StyledContainer>
      <StyledBlock>
        <Input />
      </StyledBlock>
    </StyledContainer>
  );
}

export default SignUpBox;
