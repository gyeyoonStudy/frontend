import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import { WideInput, LabelInput, FlexInput, Input, Label } from "./Input";
import { WideButton, MiniButton } from "./Button";


const Container = styled.div`
  overflow: hidden;
  height: calc(100vh) !important;
  z-index: 1;
`;

const BoxContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
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

const InputWrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
`;

const TitleWrapper = styled.div`
  width: 80%;
  margin-right: 20%;
`;

const DateWrapper = styled.div`
  height: 100%;
  width: 30%;
  margin: 0 auto;
  margin-right: 5%;
  align-items: center;
`;
const CreateComponent = styled.div`
  width: 90%;
  height: 70%;
  margin: 0 auto;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

function ProjectCreate({}) {
  const [inputs, setInputs] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/home");
  };

  return (
    <>
      <CreateComponent>
        <BoxContainer>
          <TitleWrapper>
            <Label name={"프로젝트 이름"}>
              <WideInput
                type={"text"}
                name={"프로젝트 이름"}
                onChange={handleChange}
                width={"100%"}
              />
            </Label>
          </TitleWrapper>
          <DateWrapper>
            <InputWrapper>
              <Label name={"마감 기한"}>
                <WideInput
                  type={"text"}
                  onChange={handleChange}
                  width={"70%"}
                />{" "}
              </Label>
            </InputWrapper>
            <MiniButton
              type={"text"}
              onChange={handleChange}
              width={"100%"}
              text={"AM"}
            />
            <MiniButton
              type={"text"}
              onChange={handleChange}
              width={"100%"}
              text={"PM"}
              bgColor={"white"}
              color={"black"}
            />
          </DateWrapper>
          <DateWrapper>
            <InputWrapper>
              <Label name={"마감 기한"}>
                <WideInput
                  type={"text"}
                  onChange={handleChange}
                  width={"50%"}
                />
              </Label>
            </InputWrapper>
            <MiniButton
              type={"text"}
              onChange={handleChange}
              width={"100%"}
              text={"YY"}
              bgColor={"white"}
              color={"black"}
            />
            <MiniButton
              type={"text"}
              onChange={handleChange}
              width={"100%"}
              text={"MM"}
              bgColor={"white"}
              color={"black"}
            />
          </DateWrapper>
        </BoxContainer>
        <DescriptionContainer>
          <Label name={"프로젝트 설명"}></Label>
          <FlexInput width={100} height={40} />
        </DescriptionContainer>
      </CreateComponent>
    </>
  );
}

export default ProjectCreate;
