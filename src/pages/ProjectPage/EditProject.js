import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

import { WideInput, FlexInput, Label } from "../../components/Input";
import {
  WideButton,
  ToggleButton,
  SelectButton,
} from "../../components/Button";
import DateModal from "../../components/DatePicker";
import DropDownMenu from "../../components/Dropdown";
import AppLayout from "../../components/AppLayout";
import CrewItem from "../../components/Task/CrewItem";

import CloseImg from "../../assets/close.png";
import waveImage from "../../assets/wave_background.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200vh;
  width: 100vw;
  margin: 0 auto;
  z-index: 1;
  margin-bottom: 20vh;
`;

const ProjectContainer = styled.div`
  position: absolute;
  width: 70%;
  height: 120%;
  margin: 0 auto;
  z-index: 10;
  top: 20%;
  left: 15%;
  transform: translate(-50% 0%);
  background-color: ${theme.colors.light_gray};
  border-radius: 1.3rem;
`;

const CreateComponent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  align-items: center;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BoxContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: flex-start;
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
  margin-bottom: 10%;
  align-items: flex-end;
`;

const TitleWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 10px;
`;

const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  box-sizing: border-box;
`;

const DropSelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: inline-flexbox;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 10%;
  gap: 10px;
  width: 90%;
  height: 100%; ;
`;

const DescriptionContainer = styled.div`
  display: block;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  margin-top: 5%;
`;

const CrewContainer = styled.div`
  display: block;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 15%;
`;

const BackgroundTop = styled.section`
  position: absolute;
  height: 60vh;
  width: 100vw;
  background-color: ${theme.colors.white};
  top: 0px;
  z-index: 2;
`;

const BackgroundImg = styled.div`
  position: absolute;
  height: 55%;
  width: 100%;
  bottom: -5%;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
  z-index: 3;
`;

const BackgroundBottom = styled.section`
  position: absolute;
  height: 180vh;
  width: 100vw;
  top: 20%;
  background-color: ${theme.colors.main_blue};
  bottom: 0;
  z-index: 1;
`;

const StyledFooter = styled.div`
  position: absolute;
  width: 100vw;
  height: 25%;
  bottom: 0;
  top: 175vh;
  z-index: 5;
  background-color: ${theme.colors.main_black};
`;

function EditProjectPage({ onClose, maskClosable, closable }) {
  const [isCalanderOpen, setCalenderOpen] = useState(false);
  const [deadlineHour, setDeadlineHour] = useState("HH");
  const [deadlineMinute, setDeadlineMinute] = useState("MM");
  const [projectDeadline, setProjectDeadline] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const onClickMask = (e) => {
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
    <>
      <AppLayout />
      <BackgroundTop />
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
              onClick={maskClosable ? onClickMask : null}
            />
            <BoxContainer>
              <TitleWrapper>
                <Label name="프로젝트 이름">
                  <WideInput
                    type="text"
                    name="프로젝트 이름"
                    width="60%"
                    fontSize="1rem"
                  />
                </Label>
                <Label name="팀장 이름"></Label>
                <WideInput width="60%" fontSize="1rem" />
              </TitleWrapper>

              <DateContainer>
                <DateWrapper>
                  <InputWrapper>
                    <Label name={"마감 기한"}>
                      <SelectButton
                        width={70}
                        text={
                          projectDeadline[0].startDate
                            .toISOString()
                            .split("T")[0]
                        }
                        onClick={onClickOpenCalender}
                      />
                    </Label>
                  </InputWrapper>
                  <DropSelectWrapper>
                    <ToggleButton
                      Button1={"AM"}
                      Button2={"PM"}
                      fontSize={"0.8rem"}
                    />
                  </DropSelectWrapper>
                </DateWrapper>

                <DateWrapper>
                  <InputWrapper>
                    <Label name={"마감 기한"}>
                      <SelectButton
                        width={70}
                        text={
                          projectDeadline[0].endDate === null
                            ? "Deadline"
                            : projectDeadline[0].endDate
                                .toISOString()
                                .split("T")[0]
                        }
                        onClick={onClickOpenCalender}
                      />
                    </Label>
                  </InputWrapper>
                  <DropSelectWrapper>
                    <DropDownMenu
                      header={deadlineHour === "HH" ? "HH" : deadlineHour}
                      optionList={range(12, 1)}
                      width={80}
                      onClick={onClickHourMenu}
                    />
                    <DropDownMenu
                      header={deadlineMinute === "MM" ? "MM" : deadlineMinute}
                      optionList={range(60, 1)}
                      width={80}
                      onClick={onClickMinuteMenu}
                    />
                  </DropSelectWrapper>
                </DateWrapper>
              </DateContainer>
            </BoxContainer>
            <DescriptionContainer>
              <Label name="프로젝트 소개" />
              <FlexInput width={100} height={100} />
            </DescriptionContainer>
            <CrewContainer>
              <CrewItem index={1} name={"팀장이름"} />
            </CrewContainer>
          </CreateComponent>
          <ButtonWrapper>
            <WideButton
              text={"저장하기"}
              fontSize={"0.8rem"}
              onClick={onClickMask}
              width={30}
            />
          </ButtonWrapper>
        </ProjectContainer>
        <BackgroundImg />
        <BackgroundBottom />
        <StyledFooter />
      </Container>
    </>
  );
}

export default EditProjectPage;
