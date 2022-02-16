import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";

import { WideButton } from "../../components/Button";
import { LabelInput } from "../../components/Input";
import AppLayout from "../../components/AppLayout";

import waveImage from "../../assets/wave_background.png";

const Body = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  width: 100%;
  height: 80vh;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;
const Container = styled.div`
  height: calc(100vh) !important;
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
  margin-top: 10%;
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

function SignUpPage() {
  const [inputs, setInputs] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/home");
  };

  return (
    <Container>
      <AppLayout />
      <Body>
        <BackgroundImg />
        <BoxContainer>
          <FormContainer onSubmit={handleSubmit}>
            <InputWrapper>
              <LabelInput
                type="text"
                name="Nick_name"
                value={inputs.Email || ""}
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <LabelInput
                type="text"
                name="Email"
                value={inputs.Password || ""}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelInput
                type="password"
                name="Password"
                value={inputs.Password || ""}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelInput
                type={"password"}
                name={"Password_check"}
                value={inputs.Password || ""}
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
