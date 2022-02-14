import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Portal from "./Portal";

import theme from "../../styles/theme";

import { WideInput, LabelInput, FlexInput, Input, Label } from "../Input";
import { WideButton, MiniButton, ToggleButton, SelectButton } from "../Button";
import DateModal from "../DatePicker";
import DropDownMenu from "../Dropdown";

import CloseImg from "../../assets/close.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
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
  overflow: auton;
`;
const BoxContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  z-index: 3;
`;

const CloseBtn = styled.img`
  position: absolute;
  top: 5%;
  width: 10px;
  height: 10px;
  z-index: 999;
  right: 0%; ;
`;

const InputWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
`;

const TitleWrapper = styled.div`
  width: 60%;
  margin-right: 20%;
`;

const DateWrapper = styled.div`
  height: 100%;
  width: 25%;
  float: left;
  margin-right: 5%;
  align-items: center;
`;

const TimeSelectWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  width: 100%;
`;

const DropSelectWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  gap: 1%;
`;

const CreateComponent = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  width: 100%;
`;

const StyledWideBtn = styled.button`
  width: 50%;
  box-shadow: none;
  border: 1px solid black;
  padding: 0.1rem;
  border-radius: 0.35rem;
  line-height: 2;
  border: 1px solid lightgray;
  background-color: ${theme.colors.main_black};
  color: ${theme.colors.white};
  display: inline-block;
  font-size: 0.8rem;
`;

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 60%;
  overflow: hidden;
  margin-top: 5%;
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10% 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
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

const ModalInner = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  width: 70%;
  height: 90%;
  top: 50%;
  transform: translateY(-50%);
`;

function TaskCreateModal({ visible, onClose, maskClosable, closable }) {
  const [isCalanderOpen, setCalenderOpen] = useState(false);
  const [DeadlineHour, setDeadlineHour] = useState("HH");
  const [DeadlineMinute, setDeadlineMinute] = useState("MM");
  const [isVisible, SetVisible] = useState(visible);
  const [ProjectDeadline, setProjectDeadline] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  const onClickOpenCalender = () => {
    setCalenderOpen((prev) => !prev);
  };
  const getProjectDeadline = (state) => {
    setProjectDeadline(state);
  };

  const onClickHourMenu = (time) => {
    setDeadlineHour(time);
  };

  const onClickMinuteMenu = (time) => {
    setDeadlineMinute(time);
  };

  function range(size, start = 0) {
    return [...Array(size).keys()].map((key) => key + start);
  }

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={isVisible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={isVisible}
      >
        <ModalInner tabIndex={0}>
          <Container>
            <ProjectContainer>
              {isCalanderOpen ? (
                <DateModal
                  visible={isCalanderOpen}
                  maskClosable={true}
                  closable={true}
                  setDeadline={getProjectDeadline}
                />
              ) : null}
              <CreateComponent>
                <CloseBtn
                  src={CloseImg}
                  onClick={maskClosable ? onMaskClick : null}
                />
                <BoxContainer>
                  <TitleWrapper>
                    <Label name={"프로젝트 이름"}>
                      <WideInput
                        type={"text"}
                        name={"프로젝트 이름"}
                        width={"100%"}
                        fontSize={"1rem"}
                      />
                    </Label>
                  </TitleWrapper>
                  <StyledWideBtn>팀원검색</StyledWideBtn>
                </BoxContainer>
                <DateContainer>
                  <DateWrapper>
                    <InputWrapper>
                      <Label name={"마감 기한"}>
                        <SelectButton
                          width={80}
                          text={
                            ProjectDeadline[0].startDate
                              .toISOString()
                              .split("T")[0]
                          }
                          onClick={onClickOpenCalender}
                        />
                      </Label>
                    </InputWrapper>
                    <ToggleButton
                      Button1={"AM"}
                      Button2={"PM"}
                      fontSize={"0.8rem"}
                    />
                  </DateWrapper>

                  <DateWrapper>
                    <InputWrapper>
                      <Label name={"마감 기한"}>
                        <SelectButton
                          width={80}
                          text={
                            ProjectDeadline[0].endDate === null
                              ? "Deadline"
                              : ProjectDeadline[0].endDate
                                  .toISOString()
                                  .split("T")[0]
                          }
                          onClick={onClickOpenCalender}
                        />
                      </Label>
                    </InputWrapper>
                    <TimeSelectWrapper>
                      <DropSelectWrapper>
                        <DropDownMenu
                          header={DeadlineHour === "HH" ? "HH" : DeadlineHour}
                          optionList={range(12, 1)}
                          width={80}
                          onClick={onClickHourMenu}
                        />
                        <DropDownMenu
                          header={
                            DeadlineMinute === "MM" ? "MM" : DeadlineMinute
                          }
                          optionList={range(60, 1)}
                          width={80}
                          onClick={onClickMinuteMenu}
                        />
                      </DropSelectWrapper>
                    </TimeSelectWrapper>
                  </DateWrapper>
                </DateContainer>

                <DescriptionContainer>
                  <Label name={"TASK (100자 이내)"}></Label>
                  <FlexInput width={100} height={70} />
                </DescriptionContainer>
                <ButtonWrapper>
                  <WideButton
                    text={"생성하기"}
                    fontSize={"0.8rem"}
                    onClick={onMaskClick}
                    width={30}
                  />
                </ButtonWrapper>
              </CreateComponent>
            </ProjectContainer>
          </Container>
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

export default TaskCreateModal;
