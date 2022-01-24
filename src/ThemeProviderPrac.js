import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import media from "./styles/media";

const Div = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};

  ${({ theme }) => theme.tablet` // theme props의 media 객체 사용하기
    flex-direction: column;
    font-size: ${({ theme }) =>
      theme.fontSizes.mobile}; // theme props의 theme.js 객체 사용하기
  `};

  width: 100vw;
  height: 100vh;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div2 = styled.div`
  width: 100px;
  height: 100px;
  background: white;
  margin: 5px;
`;

const ThemeProviderPrac = () => {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Div>
        <Div2>정말로</Div2>
        <Div2>리액트</Div2>
        <Div2>재밌어요</Div2>
        <Div2>진짜로</Div2>
      </Div>
    </ThemeProvider>
  );
};

export default ThemeProviderPrac;
