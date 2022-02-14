import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import theme from "../../../styles/theme";

import ProgressBackground from "../../../assets/progressBackground.png";
import BoatIcon from "../../../assets/BoatIcon.png";

const ProgressImg = styled.div`
  position: relative;
  width: 90%;
  height: 50%;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${ProgressBackground});
`;

const StyledBody = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 20%;
  margin-right: 10%;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 23vh;
  border-radius: 0.8rem;
  display: flex;
  flex-flow: column;
  background-color: ${theme.colors.white};
  box-shadow: 1px 1px 2px 2px ${theme.colors.light_gray};
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  width: 15%;
  font-size: ${(props) => `${props.fontsize}rem`};
  align-items: left;
`;

const StyledPercentText = styled.p`
  font-size: 1.7rem;
  color: ${theme.colors.main_blue};
  align-items: center;
  margin-right: 2%;
`;

const StyledTitleText = styled.p`
  width: 70%;
  margin: 0 10%;
  font-size: ${(props) => `${props.fontsize}rem`};
  align-items: center;
`;

const StyledSubText = styled.p`
  position: absolute;
  margin-right: 5%;
  right: 0;
  top: 5%;
  font-size: 0.2rem;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 40%;
`;

const Boat = styled.img`
  position: relative;
  width: 5%;
  top: ${(props) => `${props.boatHeight}%`};
  left: calc(${(props) => `${props.percent}%`} - 2.5%) !important;
  z-index: 997;
`;

function ProgressItem({ progress }) {
  const [height, setHeight] = useState((progress / 10) % 2 === 0 ? 0 : 25);
  console.log((progress / 10) % 2 === 0 ? 10 : 0);
  const history = useHistory();

  const onClickLookReceipt = () => {
    history.push("/receipt");
  };

  return (
    <Container>
      <StyledSubText onClick={onClickLookReceipt}>
        {"영수증 출력"}
      </StyledSubText>
      <StyledBody>
        <StyledTitleText fontsize={"0.8"}>{"프로젝트 소개"}</StyledTitleText>
        <StyledPercentText>{`${progress}%`}</StyledPercentText>
        <StyledText fontsize={"0.7"}>{"complete"}</StyledText>
      </StyledBody>
      <ProgressImg>
        <Boat boatHeight={height} percent={progress} src={BoatIcon}></Boat>
      </ProgressImg>
    </Container>
  );
}

export default ProgressItem;
