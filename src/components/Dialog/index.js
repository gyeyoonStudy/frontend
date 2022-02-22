import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";

import { WideButton } from "../Button";
import Modal from "../Modal/Modal";

const StyledBody = styled.div`
  width: 100%;
  height: 20vh;
  background-color: ${theme.colors.light_gray};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const ContentWrapper = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContent = styled.h1`
  width: 100%;
  color: black;
  font-size: 0.8rem;
  margin: 0 auto;
  align-items: center;
  align-content: center;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function SingleDialog({ content, isVisible, onClose, closable }) {
  const onClickClose = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <Modal visible={isVisible} maskClosable={true}>
      <StyledBody>
        <ContentWrapper>
          <StyledContent>{content}</StyledContent>
        </ContentWrapper>
        {closable && (
          <WideButton width="30%" onClick={onClickClose} text={"확인"} />
        )}
      </StyledBody>
    </Modal>
  );
}

function CheckDialog({ content, isVisible, onCancel, onNext, closable }) {
  const history = useHistory();
  const [body, setBody] = useState(content);
  const [giveAlert, setGiveAlert] = useState(false);

  const onClickCancel = (e) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  const onClickNext = (e) => {
    if (onNext) {
      if (!giveAlert) {
        setBody("방출되었습니다.");
        setGiveAlert(true);
      } else history.push("/myproject");
    }
  };

  return (
    <Modal visible={isVisible} maskClosable={true}>
      <StyledBody>
        <ContentWrapper>
          <StyledContent>{body}</StyledContent>
        </ContentWrapper>
        {closable && (
          <ButtonWrapper>
            <WideButton width={"30%"} onClick={onClickCancel} text={"취소"} />
            <WideButton width={"30%"} onClick={onClickNext} text={"확인"} />
          </ButtonWrapper>
        )}
      </StyledBody>
    </Modal>
  );
}

export { SingleDialog, CheckDialog };
