import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Portal from "./Portal";

import { WideInput, LabelInput, FlexInput, Input, Label } from "../Input";
import { WideButton, MiniButton, ToggleButton, SelectButton } from "../Button";

import CloseImg from "../../assets/close.png";
import BackgroundImg from "../../assets/high_wave.png";

import theme from "../../styles/theme";
import TaskHistory from "../Task/TaskHistory";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  top: 50%;
  transform: translate(-50% -50%);
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  z-index: 10;
  background-color: ${theme.colors.light_gray};
  border-radius: 1.3rem;
  overflow: auto;
`;
const BoxContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
`;

const CloseBtn = styled.img`
  position: absolute;
  top: 3%;
  width: 10px;
  height: 10px;
  z-index: 999;
  right: 5%; ;
`;

const InputWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
`;

const TitleWrapper = styled.div`
  width: 45%;
`;

const Body = styled.div`
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  display: flex;
  box-sizing: border-box;
  justify-content: top;
  flex-direction: column;
  width: 90%;
  height: 100%;

  z-index: 10;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DescriptionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  margin-top: 5%; ;
`;

const HistoryContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column; ;
`;

const DayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  flex-direction: row;
  margin: 5% 0;
`;

const StyledName = styled.h1`
  position: relative;
  margin-right: 10%;
  font-size: 0.7rem;
`;

const StyledDay = styled.p`
  position: relative;
  font-size: 0.7rem;
  color: ${theme.colors.red};
`;

const DetailWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 10%;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  height: 60%;
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  z-index: 3;
`;

const ModalInner = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  width: 60%;
  height: 90%;
  top: 50%;
  transform: translateY(-50%);
`;

function TaskDetailModal({ visible, onClose, maskClosable, closable }) {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex={-1} visible={visible}>
        <ModalInner tabIndex={0}>
          <Container>
            <ProjectContainer>
              <CloseBtn
                src={CloseImg}
                onClick={maskClosable ? onMaskClick : null}
              />
              <Body>
                <BoxContainer>
                  <TitleWrapper>
                    <Label name={"Task"}>
                      <WideInput type={"text"} name={"TaskName"} width={40} />
                    </Label>
                  </TitleWrapper>
                  <TitleWrapper>
                    <Label name={"Task 상태"}>
                      <WideButton text={"팀원검색"} width={100}></WideButton>
                    </Label>
                  </TitleWrapper>
                </BoxContainer>
                <DetailWrapper>
                  <DayContainer>
                    <StyledName>시작날짜</StyledName>
                    <StyledDay> yyyy/mm/dd</StyledDay>
                  </DayContainer>
                  <DayContainer>
                    <StyledName>배정된 팀원</StyledName>
                    <StyledName> 팀원이름</StyledName>
                  </DayContainer>
                </DetailWrapper>
                <DescriptionContainer>
                  <Label name={"TASK (100자 이내)"}></Label>
                  <FlexInput width={100} height={60} />
                </DescriptionContainer>
                <HistoryContainer>
                  <TaskHistory />
                  <TaskHistory />
                  <TaskHistory />
                  <TaskHistory />
                </HistoryContainer>
              </Body>
              <BackgroundImage src={BackgroundImg} />
            </ProjectContainer>
          </Container>
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

export default TaskDetailModal;
