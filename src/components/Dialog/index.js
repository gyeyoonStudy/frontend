import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import theme from "../../styles/theme";
import { BlackButton, WideButton } from "../Button";
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
  const close = (e) => {
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
          <WideButton
            wclassName="modal-close"
            width={"30%"}
            onClick={close}
            text={"확인"}
          />
        )}
      </StyledBody>
    </Modal>
  );
}

function CheckDialog({ content, isVisible, onCancel, onNext, closable }) {
  const history = useHistory();
  const [body, setBody] = useState(content);
  const [giveAlert, setGiveAlert] = useState(false);

  const cancel = (e) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  const next = (e) => {
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
            <WideButton
              wclassName="modal-close"
              width={"30%"}
              onClick={cancel}
              text={"취소"}
            />
            <WideButton
              wclassName="modal-close"
              width={"30%"}
              onClick={next}
              text={"확인"}
            />
          </ButtonWrapper>
        )}
      </StyledBody>
    </Modal>
  );
}

export { SingleDialog, CheckDialog };
