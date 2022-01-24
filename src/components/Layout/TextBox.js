import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const StyledBox = styled.div`
  width: 10vw;
  padding: 0.45rem 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
`;

function TextBox({ text }) {
  return <StyledBox>{text}</StyledBox>;
}

export default TextBox;
