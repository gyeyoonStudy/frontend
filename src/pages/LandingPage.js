import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import theme from "../styles/theme";

import { BlackButton, WhiteButton } from "../components/Button";
import AppLayout from "../components/AppLayout";

import BackgroundImage from "../../src/assets/background.png";

const Body = styled.div`
  padding: 0;
  margin: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh) !important;
  background-image: url(${BackgroundImage});
  font-family: "Noto Sans KR", sans-serif;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding-top: 17%;
  padding-left: 5%;
  column-gap: 20px;
  width: fit-content;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  border: none;
`;

function LandingPage() {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login/signIn");
  };

  const handleSignup = () => {
    history.push("/login/signup");
  };

  return (
    <Container>
      <AppLayout />
      <Body>
        <BtnWrapper>
          <BlackButton text={"로그인"} onClick={handleLogin} />
          <WhiteButton text={"회원가입"} onClick={handleSignup} />
        </BtnWrapper>
      </Body>
    </Container>
  );
}

export default LandingPage;
