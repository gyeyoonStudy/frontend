import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker, DateRange } from "react-date-range";

import theme from "../../styles/theme";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import css from "./style.css";

import { WideButton } from "../Button";

const StyledContainer = styled.div`
  width: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  padding: 20px 20px;
  transform: translate(-50%, -50%);
  border-radius: 0.8rem;
  background-color: ${theme.colors.light_gray};
`;
const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 1.3rem;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const DateModal = ({ visible, setDeadline }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isVisible, setIsVisible] = useState(visible);

  const setProjectDeadline = () => {
    setDeadline(state);
    setIsVisible((prev) => !prev);
  };

  return (
    <ModalOverlay visible={isVisible}>
      <StyledContainer tabIndex={-2} visible={isVisible}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        <WideButton text="close" onClick={setProjectDeadline}></WideButton>
      </StyledContainer>
    </ModalOverlay>
  );
};

export default DateModal;
