import React from "react";
import styled from "styled-components";

import theme from "../../styles/theme";

import Profile from "../../assets/profile.png";

const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.4rem;
  display: flex;
  flex-flow: row;
  background-color: ${theme.colors.white};
  box-shadow: 1px 1px 2px 2px ${theme.colors.light_gray};
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const ProfileBody = styled.div`
  width: 90%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-flow: row;
  margin: 2% 0;
`;

const StyledName = styled.h1`
  margin-right: 7%;
  font-size: 0.8rem;
  align-items: center;
  height: 100%;
`;

const ProfileImge = styled.img`
  width: 5%;
  height: 5%;
  margin-right: 10%;
`;

function CrewItem({ index, name }) {
  return (
    <ProfileContainer>
      <ProfileBody>
        <StyledName>{index}</StyledName>
        <ProfileImge src={Profile} />
        <StyledName>{name}</StyledName>
      </ProfileBody>
    </ProfileContainer>
  );
}

export default CrewItem;
