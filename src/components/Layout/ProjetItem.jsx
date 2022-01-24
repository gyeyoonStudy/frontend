import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { BlackButton } from "../Button/Button";
import ReactDOM from "react-dom";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.light_gray};
  margin: 30px 0;
  border-radius: 0.8rem;
  width: 100%;
  height: 8rem;
`;

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  align-self: center;
  height: 100%;
`;
const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: left;
  flex-direction: row; ;
`;

const DayContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: right;
  flex-direction: row;
  float: right;
`;

const StyledName = styled.h1`
  position: relative;
  margin-right: 10%;
  font-size: 15px;
`;

const StyledDay = styled.p`
  position: relative;
  font-size: 10px;
  color: ${theme.colors.red};
`;

const StyledBar = styled.div`
  margin-top: 0.7rem;
  background-color: ${(props) => props.color};
  width: ${(props) => props.process};
  height: 5px;
  border-radius: 3px;
  align-content: center;
`;

function ProjectBar({ process, color }) {
  return <StyledBar color={color} process={process}></StyledBar>;
}

function ProjetItem({
  process,
  color,
  onClick,
  projectName,
  projectTask,
  Dday,
}) {
  return (
    <StyledContainer onClick={onClick}>
      <StyledBody>
        <ProjectBar process={process} color={color} />
        <StyledWrapper>
          <TextContainer>
            <StyledName>{projectName}</StyledName>
            <StyledName>{projectTask}</StyledName>
          </TextContainer>
          <DayContainer>
            <StyledName>마감기한</StyledName>
            <StyledDay>{Dday}</StyledDay>
          </DayContainer>
        </StyledWrapper>
      </StyledBody>
    </StyledContainer>
  );
}

ProjetItem.propTypes = {
  process: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  projectName: PropTypes.string,
  projectTask: PropTypes.string,
  Dday: PropTypes.string,
};

export default ProjetItem;
