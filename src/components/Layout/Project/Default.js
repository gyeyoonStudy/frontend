import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../styles/theme";
import profile from "../../../assets/profile.png";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.light_gray};
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
  width: 90%;
  align-self: center;
  height: 100%;
`;
const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: left;
  flex-direction: column; ;
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

function DefaultProjectItem({ onClick, projectName, captain }) {
  return (
    <StyledContainer onClick={onClick}>
      <StyledBody>
        <StyledWrapper>
          <Profile src={profile} />
          <TextContainer>
            <StyledTitle>{projectName}</StyledTitle>
            <StyledName>{captain}</StyledName>
          </TextContainer>
        </StyledWrapper>
      </StyledBody>
    </StyledContainer>
  );
}

export default DefaultProjectItem;
