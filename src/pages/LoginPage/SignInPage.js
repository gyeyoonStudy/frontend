import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import media from "../../styles/media";
import { BlackButton, WhiteButton } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import { Input, LabelInput } from "../../components/Input/Input";
import { useState } from "react";

function SignInPage() {
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
    alert(inputs);
  };
  const onClickSignup = (event) => {
    event.preventDefault();
    history.push("/login/signup");
    alert(inputs);
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

const InputLabel = styled.p`
  float: left;
  font-size: 0.7rem;
  padding-bottom: 5%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  column-gap: 20px;
`;
