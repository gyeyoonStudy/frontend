import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import theme from "../../../styles/theme";
import { WideButton } from "../../Button";
import TaskDetailModal from "../../Modal/TaskDetailModal";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.light_gray};
  margin: 4px 0;
  border-radius: 0.4rem;
  height: 100%;
`;
const StyledContent = styled.div`
  position: relative;
  background-color: ${theme.colors.white};
  width: 90%;
  height: 30%;
  margin: 10px auto;
  align-items: center;
  border-radius: 0.3rem;
  box-shadow: 0px 0.5px 2px 0.7px ${theme.colors.medium_dark_gray};
`;

function KanbanBoard({ level }) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const openModal = () => {
    if (isDetailModalOpen === false) setIsDetailModalOpen(true);
  };
  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  const taskItems = [1, 2, 3, 4];

  return (
    <StyledContainer>
      <WideButton text={"Ready"}></WideButton>
      <StyledBody>
        {taskItems.map((value) => (
          <StyledContent onClick={openModal} key={value}>
            {isDetailModalOpen ? (
              <TaskDetailModal
                visible={isDetailModalOpen}
                closable={true}
                maskClosable={true}
                onClose={closeModal}
              />
            ) : null}
          </StyledContent>
        ))}
      </StyledBody>
    </StyledContainer>
  );
}

export default KanbanBoard;
