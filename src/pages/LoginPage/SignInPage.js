import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";

import { BlackButton, WhiteButton } from "../../components/Button";
import Footer from "../../components/Layout/Footer/Footer";
import { LabelInput } from "../../components/Input";

function SignInPage() {
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
  const onClickSignup = (event) => {
    event.preventDefault();
    history.push("/login/signup");
  };

  return (
    <Container>
      <Body>
        <StyledContainer>
          <StyledBlock />
          <FormContainer onSubmit={handleSubmit}>
            <InputWrapper className="input-wrapper">
              <LabelInput
                type={"text"}
                name={"Email"}
                value={inputs.Email || ""}
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
            <ButtonContainer>
              <WhiteButton text={"로그인"} />
              <BlackButton text={"회원가입"} onClick={onClickSignup} />
            </ButtonContainer>
          </FormContainer>
        </StyledContainer>
      </Body>
      <Footer />
    </Container>
  );
}

export default SignInPage;

const Body = styled.div`
  position: absolute;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 70vh;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 60px) !important;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 70%;
  margin: 0 auto;
  background-color: ${theme.colors.light_gray};
  border-radius: 1rem;
`;

const StyledBlock = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${theme.colors.main_blue};
  border-radius: 1rem 0rem 0rem 1rem;
  float: left;
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

const InputWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding-bottom: 10%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  column-gap: 20px;
`;
