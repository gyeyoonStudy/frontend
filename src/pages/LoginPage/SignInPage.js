import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

import Footer from "../../components/Layout/Footer/Footer";
import AppLayout from "../../components/AppLayout";

import kakakoImage from "../../assets/kakao_login_medium_wide.png";

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
  height: calc(100vh) !important;
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
  margin-top: 5%;
`;

const StyledBlock = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${theme.colors.main_blue};
  border-radius: 1rem 0rem 0rem 1rem;
  float: left;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 10%;
  padding-left: 10%;
  width: 60%;
`;

const StyledTitle = styled.p`
  font-size: 1.6rem;
  font-style: bold;
  margin: 0 auto;
  margin-bottom: 10%;
  font-weight: 600;
`;

const StyledSubTitle = styled.p`
  font-size: 0.9rem;
  font-style: bold;
  margin: 0 auto;
  width: 70%;
  text-align: center;
  margin-bottom: 10%;
  line-height: 1.6rem;
`;

const KakaoButton = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
`;

function SignInPage() {
  const onClickKakaoLogin = () => {
    window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <AppLayout />
      <Body>
        <StyledContainer>
          <StyledBlock />
          <InputWrapper>
            <StyledTitle>Log in to Boated</StyledTitle>
            <StyledSubTitle>
              카카오 계정으로 <br />
              간편하게 회원가입하세요.
            </StyledSubTitle>
            <KakaoButton src={kakakoImage} onClick={onClickKakaoLogin} />
          </InputWrapper>
        </StyledContainer>
      </Body>
      <Footer />
    </Container>
  );
}

export default SignInPage;
