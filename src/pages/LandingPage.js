import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { AnimationButton } from "../components/Button";
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
  position: fixed;
  top: 40%;
  left: 4%;
  column-gap: 20px;
  width: 20%;
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

  return (
    <Container>
      <AppLayout />
      <Body>
        <BtnWrapper>
          <AnimationButton
            text="지금 시작하기"
            onClick={handleLogin}
            width={100}
            fontSize="0.7rem"
          />
        </BtnWrapper>
      </Body>
    </Container>
  );
}

export default LandingPage;
