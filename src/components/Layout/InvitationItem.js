import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import { CheckDialog, SingleDialog } from "../Dialog";

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
  width: 95%;
  height: 8vh;
  margin-right: 20%;
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
  height: 70%;
  padding-left: 5%;
  margin-right: 10%;

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
  const [isInviteDialogVisible, setIsInviteDialogVisible] = useState(false);
  const [isReleaseDialogVisible, setIsReleaseDialogVisible] = useState(false);

  const handleOpenReleaseModal = () => {
    setIsReleaseDialogVisible(true);
  };
  const handleCloseReleaseModal = () => {
    setIsReleaseDialogVisible(false);
  };

  const handleOpenModal = () => {
    setIsInviteDialogVisible(true);
  };
  const handleCloseModal = () => {
    setIsInviteDialogVisible(false);
  };

  return (
    <StyledBox>
      <StyledBody>
        <StyledIndex>{index}</StyledIndex>
        <StyledInput type="email" />
        <StyledText color={theme.colors.black} onClick={handleOpenModal}>
          {"초대하기"}
        </StyledText>
        <StyledText color={theme.colors.red} onClick={handleOpenReleaseModal}>
          {"방출하기"}
        </StyledText>
      </StyledBody>
      {isInviteDialogVisible && (
        <SingleDialog
          content={"존재하지 않는 회원입니다"}
          isVisible={isInviteDialogVisible}
          closable={true}
          onClose={handleCloseModal}
        />
      )}
      {isReleaseDialogVisible && (
        <CheckDialog
          content={"(sample)님을 방출하시겠습니까?"}
          isVisible={isReleaseDialogVisible}
          onCancel={handleCloseReleaseModal}
          onNext={handleCloseReleaseModal}
          closable={true}
        />
      )}
    </StyledBox>
  );
}

InvitationItem.propTypes = {
  index: PropTypes.number.isRequired,
};

export default InvitationItem;
