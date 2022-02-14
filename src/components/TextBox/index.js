import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const StyledBox = styled.div`
  width: ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}%`};
  padding: 0.45rem 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  line-height: 1.5;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
`;

function TextBox({ text, width, height }) {
  return (
    <StyledBox width={width} height={height}>
      {text}
    </StyledBox>
  );
}

export default TextBox;
