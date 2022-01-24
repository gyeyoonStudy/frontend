import React from "react";
import { ThemeProvider } from "styled-components";
import media from "./media";

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const colors = {
  main_blue: "#94B0DC",
  main_black: "#030E20",
  red: "#F6374B",
  black: "#000000",
  white: "#ffffff",
  light_gray: "#f5f5f5",
  medium_gray: "#ebebeb",
  medium_dark_gray: "#a5a5a5",
  dark_gray: "#707070",
  medium_blue: "#7ba3e0",
  light_blue: "#F2F8FF",
};

const fontSizes = {
  mobile: "8px",
  tablet: "10px",
  laptop: "16px",
  subtitle: "16px",
};
const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
  fontSizes,
  colors,
};

export default theme;

// /* 두 번째 방법 media 쿼리 자체를 모듈화 하기*/
// const Box = styled.div`
//   ${({ theme }) => theme.tablet`
//     flex-direction: column;
//     font-size: ${({ theme }) => theme.fontSizes.paragraph};
//   `};
// `;
