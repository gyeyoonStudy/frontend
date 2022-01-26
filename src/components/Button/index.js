import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import PropTypes from "prop-types";
const StyledBlack = styled.button`
  padding: 0.45rem 3rem;
  border-radius: 0.25rem;
  font-size: 0.6rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  color: ${theme.colors.white};
`;

const StyledWhite = styled.button`
  padding: 0.45rem 3rem;
  border-radius: 0.25rem;
  font-size: 0.6rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
`;
const StyledWideBtn = styled(StyledBlack)`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  box-shadow: none;
  padding: 0.45rem 10%;
`;

function BlackButton({ text, fontSize, onClick }) {
  return <StyledBlack onClick={onClick}>{text}</StyledBlack>;
}

function WhiteButton({ text, fontSize, onClick }) {
  return <StyledWhite onClick={onClick}>{text}</StyledWhite>;
}

function WideButton({ text, width, fontSize, onClick }) {
  return (
    <StyledWideBtn onClick={onClick} width={width} fontSize={fontSize}>
      {text}
    </StyledWideBtn>
  );
}

export { BlackButton, WhiteButton, WideButton };

BlackButton.propTypes = {
  fontSize: PropTypes.any,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

WhiteButton.propTypes = {
  fontSize: PropTypes.any,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

WideButton.propTypes = {
  fontSize: PropTypes.any,
  width: PropTypes.any,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
