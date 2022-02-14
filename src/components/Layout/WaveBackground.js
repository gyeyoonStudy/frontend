import React from "react";
import styled from "styled-components";

import waveImage from "../../assets/wave_background.png";

const BackgroundImg = styled.div`
  position: fixed;
  height: 40%;
  width: 100%;
  bottom: 0;
  background-repeat: no-repeat;
  background-image: url(${waveImage});
  z-index: 5;
`;

function WaveBackground() {
  return <BackgroundImg />;
}

export default WaveBackground;
