import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import theme from "../../styles/theme";

import AppLayout from "../../components/AppLayout";
import { Input } from "../../components/Input";
import TextBox from "../../components/Layout/TextBox";
import { WideButton } from "../../components/Button";
import ProjectInfo from "../../components/Layout/Project/ProjectInfo";
import ProgressItem from "../../components/Layout/Project/ProgressItem";
import KanbanBoard from "../../components/Layout/Project/KanbanBoard";

import waveImage from "../../assets/wave_background.png";
import darkWaveImage from "../../assets/wave_dark_background.png";
import Profile from "../../assets/profile.png";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  height: 200vh;
  z-index: 1;
  z-index: 998;
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
  align-items: center;
  z-index: 998;
  font-family: "Noto Sans KR", sans-serif;
`;
const ProjectContainer = styled.div`
  overflow: hidden;
  width: 70%;
  height: 90vh;
  display: flex;
  flex-flow: column;
  z-index: 1;
`;
const KanbanBoardContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  flex-flow: row;
  width: 80%;
  height: 120vh;
  margin: 10% auto;
  z-index: 1;
`;

const KanbanBoardWrapper = styled.div`
  width: 20%;
  margin: ${(props) => `${props.level * 5}%`} auto;
`;

const BackgroundTop = styled.section`
  position: absolute;
  height: 40vh;
  width: 100vw;
  background-color: ${theme.colors.white};
  top: 0px;
  z-index: 980;
`;

const BackgroundImg = styled.div`
  position: absolute;
  height: 55%;
  width: 100%;
  bottom: 20%;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
  z-index: 994;
`;

const BackgroundDarkImg = styled.div`
  position: absolute;
  height: 25%;
  width: 100%;
  bottom: 0;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url(${darkWaveImage});
  z-index: 996;
`;

const BackgroundBottom = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.medium_blue};
  bottom: 0;
  z-index: 970;
`;

function HomePage() {
  return (
    <>
      <Container>
        <AppLayout />
        <Body>
          <ProjectContainer>
            <ProjectInfo
              ProjectName={"Boated"}
              Description={" 이 프로젝트는 ..."}
            />
            <ProgressItem progress={70} />
          </ProjectContainer>
          <KanbanBoardContainer>
            <KanbanBoardWrapper level={1}>
              <KanbanBoard level={1} />
            </KanbanBoardWrapper>
            <KanbanBoardWrapper level={2}>
              <KanbanBoard level={1} />
            </KanbanBoardWrapper>
            <KanbanBoardWrapper level={3}>
              <KanbanBoard level={1} />
            </KanbanBoardWrapper>
            <KanbanBoardWrapper level={4}>
              <KanbanBoard level={1} />
            </KanbanBoardWrapper>
          </KanbanBoardContainer>
        </Body>
      </Container>
      <BackgroundTop />
      <BackgroundImg />
      <BackgroundDarkImg />
      <BackgroundBottom />
    </>
  );
}

export default HomePage;
