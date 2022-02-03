import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import PropTypes from "prop-types";

const StyledBox = styled.div`
  position: relative;
  width: 90%;
  padding: 0.45rem 1.5rem;
  text-align: center;
  border-radius: 0.35rem;
  font-size: 0.7rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  margin-bottom: 3%;
`;

const StyledBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  width: 100%;
  height: 8vh;
  margin-right: 10%;
`;

const StyledIndex = styled.h1`
  text-align: center;
  margin-right: 10%;
  font-weight: bold;
`;

const StyledInput = styled.input`
  background: linear-gradient(
      ${theme.colors.dark_gray},
      ${theme.colors.dark_gray}
    )
    center bottom 5px / calc(100% - 10px) 1px no-repeat;
  background-color: none;
  border: none;
  width: 30%;
  height: 100%;
  padding-left: 5%;
  margin-right: 10%;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const StyledText = styled.h1`
  text-align: center;
  margin-left: 10px;
  color: ${(props) => props.color};
`;

function InvitationItem({ index }) {
  return (
    <StyledBox>
      <StyledBody>
        <StyledIndex>{index}</StyledIndex>
        <StyledInput />
        <StyledText color={theme.colors.black}>{"초대하기"}</StyledText>
        <StyledText color={theme.colors.red}>{"방출하기"}</StyledText>
      </StyledBody>
    </StyledBox>
  );
}

InvitationItem.propTypes = {
  index: PropTypes.number.isRequired,
};

export default InvitationItem;
