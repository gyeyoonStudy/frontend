import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "../../../styles/theme";

import Profile from "../../../assets/profile.png";

const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: column;

  width: 60%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  display: flex;
  flex-flow: row;
  background-color: ${(props) => props.bgColor};
  box-shadow: 1px 1px 2px 2px ${theme.colors.light_gray};
  justify-content: space-around;
  align-items: center;
  margin: 10% 0;
`;
const ProfileImg = styled.img`
  width: 10%;
  float: left;
  height: auto;
  margin-right: 5%;
`;

const ProfileBody = styled.div`
  width: 70%;
  display: flex;
  justify-content: left;
  flex-flow: row;
  margin: 2% 0;
`;

const StyledText = styled.p`
  width: 100%;
  font-size: ${(props) => `${props.fontsize}rem`};
  padding: 3% 0px;
`;

const StyledTitleText = styled.p`
  width: 100%;
  font-size: ${(props) => `${props.fontsize}rem`};
  margin: 7%;
`;
const DayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 3% 0;
`;

const StyledName = styled.h1`
  position: relative;
  margin-right: 10%;
  font-size: 0.8rem;
`;

const StyledDay = styled.p`
  position: relative;
  font-size: 0.8rem;
  color: ${theme.colors.red};
`;
function ProjectInfo({
  ProjectName,
  Description,
  bgColor,
  captainName,
  startDay,
  endDay,
}) {
  return (
    <ProfileContainer bgColor={bgColor}>
      <ProfileImg src={Profile} />
      <ProfileBody>
        <ProfileWrapper>
          <StyledTitleText fontsize={"1"}>{ProjectName}</StyledTitleText>
          <StyledText fontsize={"0.8"}>프로젝트 소개</StyledText>
          <StyledText fontsize={"0.7"}>{Description}</StyledText>
        </ProfileWrapper>
        <ProfileWrapper>
          <StyledTitleText fontsize={"0.8"}>팀장 이름</StyledTitleText>
          <DayContainer>
            <StyledName>시작날짜</StyledName>
            <StyledDay> yyyy/mm/dd</StyledDay>
          </DayContainer>
          <DayContainer>
            <StyledName>마감기한</StyledName>
            <StyledDay> yyyy/mm/dd 00:00</StyledDay>
          </DayContainer>
        </ProfileWrapper>
      </ProfileBody>
    </ProfileContainer>
  );
}

ProjectInfo.propType = {
  ProjectName: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
};
export default ProjectInfo;
