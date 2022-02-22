import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../styles/theme";

import Arrow from "../../assets/down_arrow.png";

const StyledBlack = styled.button`
  padding: 0.45rem 3rem;
  border-radius: 0.25rem;
  font-size: 0.6rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  color: ${theme.colors.white};
  z-index: 100;
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
  width: ${(props) => `${props.width}%`};
  font-size: ${(props) => props.fontSize};
  box-shadow: none;
  border: 1px solid black;
  padding: 0.45rem 10%;
  border-radius: 0.35rem;
`;

const AnimationWideBtn = styled(StyledBlack)`
  width: ${(props) => `${props.width}%`};
  font-size: ${(props) => props.fontSize};
  box-shadow: none;
  border: 1px solid black;
  padding: 0.45rem 10%;
  border-radius: 0.35rem;
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border: 2px solid black;
  }
`;

const StyledMiniBtn = styled(StyledBlack)`
  width: ${(props) => `${props.width}%`};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  padding: 0.3rem 1.2rem;
`;

const StyledBox = styled.button`
  position: relative;
  width: ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}%`};
  padding: 0.55rem 1rem;
  border-radius: 0.4rem;
  font-size: 0.7rem;
  line-height: 1.5;
  text-align: start;
  border: 1px solid lightgray;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
`;

const StyledToggleWrapper = styled.div`
  flex-direction: row;
  display: inline-flex;
  line-height: 1.5;
  border: 1px solid lightgray;
  border-radius: 0.4rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
`;

const StyledUnlineButton = styled.button`
  width: ${(props) => `${props.width}%`};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
`;

const ArrowIcon = styled.img`
  position: absolute;
  width: 10px;
  height: 8px;
  top: 50%;
  right: 0%;
  transform: translate(-100%, -50%);
`;

function BlackButton({ text, onClick }) {
  return <StyledBlack onClick={onClick}>{text}</StyledBlack>;
}

function WhiteButton({ text, onClick }) {
  return <StyledWhite onClick={onClick}>{text}</StyledWhite>;
}

function WideButton({ text, width, fontSize, onClick }) {
  return (
    <StyledWideBtn onClick={onClick} width={width} fontSize={fontSize}>
      {text}
    </StyledWideBtn>
  );
}

function AnimationButton({ text, width, fontSize, onClick, hoverText }) {
  return (
    <AnimationWideBtn
      onClick={onClick}
      width={width}
      fontSize={fontSize}
      hoverText={hoverText}
    >
      {text}
    </AnimationWideBtn>
  );
}

function MiniButton({ text, width, fontSize, color, bgColor, onClick }) {
  return (
    <StyledMiniBtn
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      width={width}
      fontSize={fontSize}
    >
      {text}
    </StyledMiniBtn>
  );
}

function UnlineButton({ text, width, fontSize, color, bgColor, onClick }) {
  return (
    <StyledUnlineButton
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      width={width}
      fontSize={fontSize}
    >
      {text}
    </StyledUnlineButton>
  );
}

function ToggleButton({ Button1, Button2, fontSize }) {
  const whiteBtn = { color: "black", bgColor: "white" };
  const blackBtn = { color: "white", bgColor: "black" };
  const option = [whiteBtn, blackBtn];
  const [button1, setButton1] = useState(0);
  const [button2, setButton2] = useState(1);
  const onClickToggle = () => {
    setButton1((prev) => (prev === 0 ? 1 : 0));
    setButton2((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <StyledToggleWrapper>
      <UnlineButton
        type={"text"}
        width={100}
        fontSize={fontSize}
        text={Button1}
        color={option[button1].color}
        bgColor={option[button1].bgColor}
        onClick={onClickToggle}
      />
      <UnlineButton
        type={"text"}
        width={100}
        fontSize={fontSize}
        text={Button2}
        color={option[button2].color}
        bgColor={option[button2].bgColor}
        onClick={onClickToggle}
      />
    </StyledToggleWrapper>
  );
}

function SelectButton({ text, width, height, onClick, fontSize }) {
  return (
    <>
      <StyledBox
        width={width}
        height={height}
        onClick={onClick}
        fontSize={fontSize}
      >
        {text}
        <ArrowIcon src={Arrow} />
      </StyledBox>
    </>
  );
}

export {
  BlackButton,
  WhiteButton,
  WideButton,
  MiniButton,
  UnlineButton,
  ToggleButton,
  SelectButton,
  AnimationButton,
};

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
