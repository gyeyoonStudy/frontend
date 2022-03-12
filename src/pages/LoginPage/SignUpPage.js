import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";

import { WideButton } from "../../components/Button";
import { WideInput } from "../../components/Input";
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
  height: 80%;
  margin: 0 auto;
  margin-top: 10%;
  background-color: ${theme.colors.light_gray};
  border-radius: 1rem;
  z-index: 3;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 25%;
  width: 100%;
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

const StyledTitle = styled.p`
  font-size: 1.6rem;
  font-style: bold;
  margin: 0 auto;
  margin-bottom: 10%;
  font-weight: 600;
`;

function SignUpPage() {
  const [userProfile, setUserProfile] = useState({
    nickName: "Guest",
    email: "",
    school: "",
  });
  const history = useHistory();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const authorizeCodeFromKakao = window.location.search.split("=")[1];
    if (authorizeCodeFromKakao !== undefined) {
      const body = {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        code: authorizeCodeFromKakao,
      };

      const queryStringBody = Object.keys(body)
        .map((k) => encodeURIComponent(k) + "=" + encodeURI(body[k]))
        .join("&");

      fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: queryStringBody,
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            if (!window.Kakao.isInitialized()) {
              window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
            }
            window.Kakao.Auth.setAccessToken(data.access_token);
            getProfile();
          } catch (err) {
            console.log(err);
          }
        });
    }
  };

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      console.log(data);
      setUserProfile({
        nickName: data.kakao_account.profile.nickname,
        email: data.kakao_account.email,
        school: "",
      });
      console.log(userProfile);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserProfile((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userProfile.school === "") alert("학교 정보를 입력해주세요");
    else history.push("/home");
  };

  return (
    <Container>
      <AppLayout />
      <Body>
        <BackgroundImg />
        <BoxContainer>
          <FormContainer onSubmit={handleSubmit}>
            <StyledTitle>Welcome, {userProfile.nickName}!</StyledTitle>
            <InputWrapper>
              <WideInput
                type="text"
                name="school"
                placeholder="Write your School name"
                value={userProfile.school || ""}
                onChange={handleChange}
                width="100%"
                fontSize="0.9rem"
              />
            </InputWrapper>
            <WideButton text="Let's start!" width={100} fontSize="1rem" />
          </FormContainer>
        </BoxContainer>
      </Body>
    </Container>
  );
}

export default SignUpPage;
