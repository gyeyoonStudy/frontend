import React, { useState } from "react";
import styled from "styled-components";

import { SelectButton } from "../Button";
import theme from "../../styles/theme";

const DropDownContainer = styled("div")`
  width: 6em;
  z-index: 900;
`;

const DropDownListContainer = styled("div")`
  height: 100px;
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DropDownList = styled("ul")`
  width: ${(props) => `${props.width}px`};
  padding: 0;
  margin: 0;
  align-items: left;

  font-size: 0.9rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.2em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.3em;
  padding-left: 1rem;
  height: 1rem;
  &:hover {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border-radius: 0.2rem;
  }
`;

export default function DropDownMenu({ header, optionList, width, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = optionList;
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onClick(value);
  };

  return (
    <DropDownContainer>
      <SelectButton text={header} width={width} onClick={toggling}>
        {selectedOption || options[0]}
      </SelectButton>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList width={width}>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
