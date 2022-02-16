import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { WideButton } from "../../components/Button";
import AppLayout from "../../components/AppLayout";
import DefaultProjectItem from "../../components/Layout/Project/Default";

import waveImage from "../../assets/wave_background.png";
import floating from "../../assets/floating.png";

const Body = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 10%;
  align-items: center;
  z-index: 1;
  font-family: "Noto Sans KR", sans-serif;
`;
const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  z-index: 1;
`;

const ProfileImg = styled.img`
  width: 15%;
  float: left;
  height: auto;
  margin-right: 5%;
`;

const FloatingIcon = styled.img`
  position: fixed;
  top: 80vh;
  width: 5%;
  right: 1%;
  float: right;
  height: auto;
  margin-right: 5%;
  z-index: 3;
`;

const ProjectContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
`;

const BackgroundImg = styled.div`
  position: fixed;
  height: 60%;
  width: 100%;
  bottom: 0;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
`;

function MyProjectPage() {
  const history = useHistory();

  const onClickAddProject = () => {
    history.push("/project/create");
  };

  return (
    <Container>
      <AppLayout />
      <Body>
        <ProjectContainer>
          <WideButton text="프로젝트" width={100} fontSize="0.8rem" />
          <DefaultProjectItem projectName="Boated" captain="captain" />
          <DefaultProjectItem projectName="Boated" captain="captain" />
          <DefaultProjectItem projectName="Boated" captain="captain" />
        </ProjectContainer>
      </Body>
      <FloatingIcon src={floating} onClick={onClickAddProject} />
      <BackgroundImg />
    </Container>
  );
}

export default MyProjectPage;
