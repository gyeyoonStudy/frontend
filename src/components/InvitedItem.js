import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../styles/theme";
import profile from "../assets/profile.png";
import { BlackButton, WhiteButton, MiniButton } from "./Button";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.white};
  align-items: center;
  box-shadow: 1px 1px 3px 3px ${theme.colors.light_blue};
  margin: 20px 0;
  border-radius: 0.8rem;
  width: 100%;
  height: 8rem;
  border-radius: 0.8rem;
`;

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  align-self: center;
  height: 100%;
`;
const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: left;
  flex-direction: column; ;
`;

const ButtonContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  gap: 10px;
`;

const Profile = styled.img`
  height: 60%;
`;

const StyledTitle = styled.h1`
  position: relative;
  margin-right: 10%;
  margin: 0.8rem 0;
  font-size: 15px;
  font-weight: bold;
`;

const StyledName = styled.h1`
  position: relative;
  margin-right: 10%;
  margin: 0.7rem 0;
  font-size: 15px;
`;

function InvitedItem({ onClick, projectName, captain }) {
  return (
    <StyledContainer onClick={onClick}>
      <StyledBody>
        <StyledWrapper>
          <Profile src={profile} />
          <TextContainer>
            <StyledTitle>{projectName}</StyledTitle>
            <StyledName>{captain}</StyledName>
          </TextContainer>
          <ButtonContainer>
            <MiniButton text={"수락"}></MiniButton>
            <MiniButton
              text={"거절"}
              bgColor={theme.colors.light_gray}
              color={theme.colors.black}
            ></MiniButton>
          </ButtonContainer>
        </StyledWrapper>
      </StyledBody>
    </StyledContainer>
  );
}

export default InvitedItem;
