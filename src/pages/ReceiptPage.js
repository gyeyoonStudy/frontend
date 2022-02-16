import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import theme from "../styles/theme";

import AppLayout from "../components/AppLayout";
import ReceiptProfile from "../components/Layout/ReceiptProfile";

import Boated from "../assets/BoatIcon.png";
import waveImage from "../assets/wave_background.png";
import darkWaveImage from "../assets/wave_dark_background.png";
import Profile from "../assets/profile.png";
import floating from "../assets/floating.png";
import receiptImage from "../assets/receipt_bg.png";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  height: 250vh;
  z-index: 1;
  z-index: 990;
`;
const Body = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  width: 100%;
  top: 20%;
  align-items: center;
  z-index: 996;
`;
const ProjectContainer = styled.div`
  overflow: hidden;
  width: 50%;
  height: 200vh;
  display: flex;
  flex-flow: column;
  z-index: 1;
  background-image: url(${receiptImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-top: 5%;
  padding-left: 30%;
  padding-right: 30%;
`;

const BackgroundTop = styled.section`
  position: absolute;
  height: 110vh;
  width: 100vw;
  background-color: ${theme.colors.white};
  top: 0px;
  z-index: 980;
`;

const BackgroundImg = styled.div`
  position: absolute;
  height: 55%;
  width: 100%;
  bottom: -30%;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
  z-index: 994;
`;

const BackgroundDarkImg = styled.div`
  position: absolute;
  height: 25%;
  width: 100%;
  bottom: -50%;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url(${darkWaveImage});

  z-index: 995;
`;

const BackgroundBottom = styled.div`
  position: fixed;
  height: 170vh;
  width: 100vw;
  background-color: ${theme.colors.medium_blue};
  bottom: -55%;
  z-index: 970;
`;

const Footer = styled.div`
  position: relative;
  height: 30vh;
  width: 90vw;
  background-color: ${theme.colors.main_black};
  border-radius: 6rem 6rem 0 0;
  z-index: 999;
`;

const Line = styled.div`
  position: relative;

  margin: 0.3rem 0;
  height: 0.05rem;
  width: 100%;
  background-color: ${theme.colors.main_black};
  z-index: 990;
`;

const StyledTitleText = styled.p`
  width: 100%;
  height: auto;
  color: black;
  font-style: bold;
  font-size: 1.2rem;
  margin: 5% 0;
`;

const StyledText = styled.p`
  width: auto;
  height: auto;
  color: black;
  align-items: center;
  font-style: bold;
  font-size: 0.8rem;
  margin: 5% auto;
`;

const StyledRightText = styled.p`
  align-items: right;
  font-style: bold;
  font-size: 1.2rem;
  width: auto;
  height: auto;
  margin: 10% 0;
`;

const StyleLeftText = styled.p`
  align-items: left;
  font-style: bold;
  font-size: 1rem;
  width: auto;
  height: auto;
  margin: 10% 0;
`;

const StyledSubText = styled.p`
  align-items: right;
  font-style: bold;
  font-size: 0.7rem;
  width: auto;
  height: auto;
  margin: 10% 0;
  color: ${theme.colors.dark_gray};
`;
const StyledTextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 0;
  padding: 1.5rem 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledRightWrapper = styled(StyledTextWrapper)`
  justify-content: right;
  gap: 20%;
  padding: 2rem 0;
  width: 90%;
`;

const FloatingIcon = styled.img`
  position: fixed;
  bottom: 5%;
  width: 5%;
  right: 1%;
  float: right;
  height: auto;
  margin-right: 5%;
  z-index: 998;
`;
const ProfileImg = styled.img`
  width: 2rem;
  float: left;
  height: 2rem;
  margin: 0 auto;
  align-items: center;
`;

const BoatImg = styled.img`
  position: absolute;
  width: 2rem;
  left: calc(${(props) => `${props.percent}%`} - 0.7rem) !important;
  bottom: 0;
  height: 2rem;
  align-items: top;
  z-index: 990;
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 60%;
  height: 0.7rem;
`;
const ProgressWrapper = styled.div`
  position: relative;
  height: 0.7rem;
  border-radius: 0.3rem;
  box-shadow: 1px 1px 2px 2px ${theme.colors.medium_gray};
  background-color: ${theme.colors.medium_dark_gray};
`;

const ContributionContainer = styled.div`
  height: 0;
  padding: 2rem 0;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ProgressBar = styled.div`
  display: relative;
  width: ${(props) => `${props.percent}%`};
  height: 0.7rem;
  border-radius: 0.3rem;
  background-color: ${theme.colors.main_black};
`;

const ContributionList = styled.ul`
  display: list-item;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;

function TaskDetailItem({ taskName, date, crewName, progressPercent }) {
  return (
    <StyledTextWrapper>
      <StyledText>{taskName}</StyledText>
      <StyledText>{date}</StyledText>
      <StyledText>{crewName}</StyledText>
      <StyledText>{progressPercent + "%"}</StyledText>
    </StyledTextWrapper>
  );
}

function ContributionItem({ taskName, crewName, progressPercent }) {
  return (
    <ContributionContainer>
      <StyledText>{taskName}</StyledText>
      <ProfileImg src={Profile} />
      <StyledText>{crewName}</StyledText>

      <ProgressContainer>
        <BoatImg src={Boated} percent={progressPercent}></BoatImg>
        <ProgressWrapper>
          <ProgressBar percent={progressPercent} />
        </ProgressWrapper>
      </ProgressContainer>
      <StyledText>{progressPercent + "%"}</StyledText>

      <StyledSubText>내역 확인하기</StyledSubText>
    </ContributionContainer>
  );
}

function ReceiptPage() {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Container>
        <AppLayout />
        <Body>
          <ProjectContainer>
            <StyledTitleText>Project Receipt</StyledTitleText>
            <Line />
            <ReceiptProfile
              ProjectName="Boated"
              Description=" 이 프로젝트는 ..."
              bgColor="none"
            />

            <Line />
            <StyledTextWrapper>
              <StyledText>완료한 Task</StyledText>
              <StyledText>완료한 날짜</StyledText>
              <StyledText>참여한 팀원</StyledText>
              <StyledText>성취도</StyledText>
            </StyledTextWrapper>
            <TaskDetailItem
              taskName="task1"
              date="yyyy-mm-dd"
              crewName="crew1"
              progressPercent="70"
            />
            <TaskDetailItem
              taskName="task1"
              date="yyyy-mm-dd"
              crewName="crew1"
              progressPercent="70"
            />

            <Line />
            <StyledRightWrapper>
              <StyledRightText>TOTAL 성취도</StyledRightText>
              <StyledRightText>{"70%"}</StyledRightText>
            </StyledRightWrapper>
            <Line />
            <Line />
            <StyleLeftText>{"팀원별 기여도"}</StyleLeftText>
            <ContributionList>
              <ContributionItem
                taskName="task1"
                crewName="crew1"
                progressPercent="70"
              />
            </ContributionList>
            <Line />
            <Line />
          </ProjectContainer>

          <Footer />
        </Body>
        <FloatingIcon src={floating} onClick={openModal} />
      </Container>

      <BackgroundTop />
      <BackgroundImg />
      <BackgroundDarkImg />
      <BackgroundBottom />
    </>
  );
}

export default ReceiptPage;
