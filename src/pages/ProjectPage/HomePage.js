import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import theme from "../../styles/theme";

import AppLayout from "../../components/AppLayout";
import ProjectInfo from "../../components/Layout/Project/ProjectInfo";
import ProgressItem from "../../components/Layout/Project/ProgressItem";
import KanbanBoard from "../../components/Layout/Project/KanbanBoard";
import TaskCreateModal from "../../components/Modal/TaskCreateModal";

import waveImage from "../../assets/wave_background.png";
import darkWaveImage from "../../assets/wave_dark_background.png";
import floating from "../../assets/floating.png";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  height: 200vh;
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
  align-items: center;
  z-index: 996;
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
  height: 150vh;
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
  z-index: 995;
`;

const BackgroundBottom = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.medium_blue};
  bottom: 0;
  z-index: 970;
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

function HomePage() {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <AppLayout />
        <Body>
          <ProjectContainer>
            <ProjectInfo
              ProjectName={"Boated"}
              Description={" 이 프로젝트는 ..."}
              bgColor={"white"}
            />
            {isModalOpen ? (
              <TaskCreateModal
                visible={isModalOpen}
                closable={true}
                maskClosable={true}
                onClose={closeModal}
              />
            ) : null}
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
        <FloatingIcon src={floating} onClick={openModal} />
      </Container>

      <BackgroundTop />
      <BackgroundImg />
      <BackgroundDarkImg />
      <BackgroundBottom />
    </>
  );
}

export default HomePage;
