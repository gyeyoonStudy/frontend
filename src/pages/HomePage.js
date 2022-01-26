import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import { Input } from "../components/Input";
import TextBox from "../components/Layout/TextBox";
import { WideButton } from "../components/Button";
import ProjetItem from "../components/Layout/ProjetItem";
import Modal from "../components/Modal/Modal";

import Profile from "../assets/profile.png";
import waveImage from "../assets/wave_background.png";
import floating from "../assets/floating.png";

function HomePage() {
  const history = useHistory();

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const onClickItem = () => {
    history.push("/project/detail");
  };

  return (
    <Container>
      <Body>
        <ProjectContainer>
          <ProfileContainer>
            <ProfileImg />
            <div style={{ width: "35%" }}>
              <ProfileWrapper>
                <p style={{ fontSize: "0.9rem", marginRight: "20%" }}>
                  {"닉네임"}
                </p>
                <TextBox text={"Boated"} />
              </ProfileWrapper>
              <ProfileWrapper>
                <p style={{ fontSize: "0.9rem", marginRight: "20%" }}>
                  {"이메일"}
                </p>
                <TextBox text={"Boated@gmail.com"} />
              </ProfileWrapper>
            </div>
          </ProfileContainer>
          <WideButton text={"프로젝트"} width="100%" fontSize="0.8rem" />
          <ProjetItem
            process={"50%"}
            color={"tomato"}
            projectName={"Project Boated1"}
            projectTask={"Task"}
            Dday={"2022-01-01 11:11"}
          ></ProjetItem>
          <ProjetItem
            process={"100%"}
            color={"green"}
            projectName={"Project Boated2"}
            projectTask={"Task"}
            Dday={"2022-01-01 11:11"}
            onClick={onClickItem}
          ></ProjetItem>
          <>
            <ProjetItem
              process={"70%"}
              color={"black"}
              projectName={"Project Boated2"}
              projectTask={"Task"}
              Dday={"2022-01-01 11:11"}
              onClick={openModal}
            ></ProjetItem>
            {modalVisible && (
              <Modal
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                onClose={closeModal}
              >
                <Input />
              </Modal>
            )}
          </>
        </ProjectContainer>
      </Body>
      <FloatingIcon />
      <BackgroundImg />
    </Container>
  );
}

const Body = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;

  align-items: center;
  z-index: 1;
  font-family: "Noto Sans KR", sans-serif;
`;
const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  z-index: 1;
`;

const ProfileImg = styled.img.attrs({
  src: `${Profile}`,
})`
  width: 15%;
  float: left;
  height: auto;
  margin-right: 5%;
`;

const FloatingIcon = styled.img.attrs({
  src: `${floating}`,
})`
  position: fixed;
  top: 80vh;
  width: 5%;
  right: 1%;
  float: right;
  height: auto;
  margin-right: 5%;
  z-index: 3;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: row;
  padding: 10px;
  width: 100%;
  align-items: center;
`;
const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  margin: 10% 0;
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
  height: 40%;
  width: 100%;
  bottom: 0;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
`;

export default HomePage;
