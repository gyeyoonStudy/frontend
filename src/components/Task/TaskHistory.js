import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;
const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.4rem;
  display: flex;
  flex-flow: row;
  background-color: ${theme.colors.white};
  box-shadow: 1px 1px 2px 2px ${theme.colors.light_gray};
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const ProfileBody = styled.div`
  width: 90%;
  display: flex;
  justify-content: left;
  flex-flow: row;
  margin: 2% 0;
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
  font-size: 0.5rem;
`;

const StyleFile = styled.p`
  position: relative;
  font-size: 0.6rem;
  color: ${theme.colors.main_blue};
`;
function TaskHisotry({
  ProjectName,
  Description,
  captainName,
  startDay,
  endDay,
}) {
  return (
    <ProfileContainer>
      <ProfileBody>
        <ProfileWrapper>
          <DayContainer>
            <StyledName>시작날짜</StyledName>
            <StyledName> yyyy/mm/dd</StyledName>
          </DayContainer>
          <DayContainer>
            <StyledName>설명</StyledName>
          </DayContainer>
        </ProfileWrapper>
        <ProfileWrapper>
          <DayContainer>
            <StyledName>파일</StyledName>
            <StyleFile> 파일이름</StyleFile>
          </DayContainer>
          <DayContainer>
            <StyledName>히스토리 관리</StyledName>
          </DayContainer>
        </ProfileWrapper>
      </ProfileBody>
    </ProfileContainer>
  );
}

export default TaskHisotry;
