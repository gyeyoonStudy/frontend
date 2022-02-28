import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../styles/theme";

import { WideButton } from "../../components/Button";
import AppLayout from "../../components/AppLayout";
import ProjectCreate from "../../components/Layout/Project/ProjectCreatLayout";
import InvitationItem from "../../components/Layout/InvitationItem";

import waveImage from "../../assets/wave_background.png";
import nextBtn from "../../assets/nextBtn.png";
import plusBtn from "../../assets/plusBtn.png";

const Body = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  z-index: 1;
  font-family: "Noto Sans KR", sans-serif;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh) !important;
  z-index: 1;
`;

const InvitationContainer = styled.ul`
  overflow: auto;
  overflow-y: visible;
  overflow-x: hidden;
  margin-top: 5%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-left: 2%;
  width: 85%;
  height: 80%;
  z-index: 3;
`;

const NextBtn = styled.img`
  position: absolute;
  top: 45%;
  left: 82%;
  width: 70px;
  height: 70px;
  z-index: 999;
`;

const ProjectContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  z-index: 10;
  background-color: ${theme.colors.light_gray};
  border-radius: 1.3rem;
  overflow: hidden;
`;

const BackgroundImg = styled.div`
  position: fixed;
  height: 50%;
  width: 100%;
  bottom: 0;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
`;

const ProjectName = styled.h1`
  margin-top: 4%;
  width: 80%;
  height: 10px;
  z-index: 999;
`;

const InviteWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 0.45rem 1.5rem;
  border-radius: 0.35rem;
  border: 1px solid ${theme.colors.main_blue};
  font-size: 0.8rem;
  width: 90%;
  height: 8vh;
  margin-bottom: 10%;
`;

const AddInvitation = styled.img`
  width: 30px;
  height: 30px;
  &:hover {
    width: 40px;
    height: 40px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 990;
`;

function CreatePage() {
  const history = useHistory();

  const [projectName, setProjectName] = useState("");
  const [isCreated, setIsCreated] = useState(true);
  const [isAddedInvitation, setIsAddedInvitation] = useState(false);
  const [invitationList, setInvitationList] = useState([1]);

  const onClickGoToInvitation = () => {
    setIsCreated(false);
  };

  const onClickBackHome = () => {
    history.push("/home");
  };

  const onClickAddInvitation = () => {
    const cur = invitationList;
    cur.push(invitationList.length + 1);
    setInvitationList(cur);
    setIsAddedInvitation((prev) => !prev);
  };

  return (
    <Container>
      <AppLayout />
      <Body>
        <ProjectContainer>
          {isCreated && (
            <NextBtn src={nextBtn} onClick={onClickGoToInvitation} />
          )}
          {isCreated ? (
            <ProjectCreate />
          ) : (
            <>
              <ProjectName>{projectName}</ProjectName>
              <InvitationContainer>
                {invitationList.map((value) => {
                  return <InvitationItem key={value} index={value} />;
                })}
                <InviteWrap>
                  <AddInvitation src={plusBtn} onClick={onClickAddInvitation} />
                </InviteWrap>
              </InvitationContainer>
            </>
          )}
        </ProjectContainer>
      </Body>
      {!isCreated && (
        <ButtonWrapper>
          <WideButton
            width={"13vw"}
            fontSize={"0.9rem"}
            text={"생성하기"}
            onClick={onClickBackHome}
          ></WideButton>
        </ButtonWrapper>
      )}
      <BackgroundImg />
    </Container>
  );
}

export default CreatePage;
