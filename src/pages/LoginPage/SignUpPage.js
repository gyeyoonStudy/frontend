﻿import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import media from "../../styles/media";
import {
  BlackButton,
  WhiteButton,
  WideButton,
} from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import { Input, LabelInput } from "../../components/Input/Input";
import { useState } from "react";
import waveImage from "../../assets/wave_background.png";

function SignUpPage() {
  const [inputs, setInputs] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`Email : ${inputs.Email}, Password ${inputs.Password}`);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/home");
    //alert(inputs);
  };

  return (
    <Container>
      <Body>
        <BackgroundImg />
        <BoxContainer>
          <FormContainer onSubmit={handleSubmit}>
            <InputWrapper className="input-wrapper">
              <LabelInput
                type={"text"}
                name={"Nick_name"}
                value={inputs.Email || ""}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper className="input-wrapper">
              <LabelInput
                type={"text"}
                name={"Email"}
                alue={inputs.Password || ""}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper className="input-wrapper">
              <LabelInput
                type={"password"}
                name={"Password"}
                alue={inputs.Password || ""}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper className="input-wrapper">
              <LabelInput
                type={"password"}
                name={"Password_check"}
                alue={inputs.Password || ""}
                onChange={handleChange}
              />
            </InputWrapper>
            <WideButton text={"Join"} width={"60%"} fontSize={"0.8rem"} />
          </FormContainer>
        </BoxContainer>
      </Body>
    </Container>
  );
}

export default SignUpPage;

const Body = styled.div`
  position: absolute;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 80vh;
  align-items: center;

  font-family: "Noto Sans KR", sans-serif;
`;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 60px) !important;
`;

const BackgroundImg = styled.div`
  position: fixed;
  height: 40%;
  width: 100%;
  bottom: 0;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 90%;
  margin: 0 auto;
  background-color: ${theme.colors.light_gray};
  border-radius: 1rem;
  z-index: 3;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding-bottom: 10%;
`;

const FormContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  top: 50%;
  transform: translateY(-50%);
  float: right;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  column-gap: 20px;
`;
