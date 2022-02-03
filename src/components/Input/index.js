import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  padding: 0.45rem 2rem;
  border-radius: 0.25rem;
  font-size: 0.6rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  &:focus {
    outline: none;
  }
`;

const StyledDescription = styled.input`
  border-radius: 0.25rem;
  padding: 0.45rem 2rem;
  width: ${(props) => `${props.width}%`};
  height: ${(props) => `${props.height}%`};
  font-size: 0.6rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: ${theme.colors.white};
  color: ${theme.colors.main_black};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  float: left;
  font-size: 0.7rem;
  padding-bottom: 5%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const StyledWideInput = styled(StyledInput)`
  width: ${(props) => props.width};
`;

function Input({ type, name, value, onChange, ...res }) {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
}

function LabelInput({ type, name, value, onChange }) {
  return (
    <InputWrapper>
      <StyledLabel>{name}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      ></StyledInput>
    </InputWrapper>
  );
}

function WideInput({ type, name, value, width, onChange }) {
  return (
    <InputWrapper>
      <StyledWideInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        width={width}
      ></StyledWideInput>
    </InputWrapper>
  );
}

function Label({ name, children }) {
  return (
    <InputWrapper>
      <StyledLabel>{name}</StyledLabel>
      {children}
    </InputWrapper>
  );
}

function FlexInput({ type, name, value, width, height, onChange }) {
  return (
    <StyledDescription
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      height={height}
      width={width}
    ></StyledDescription>
  );
}

export { Input, LabelInput, WideInput, FlexInput, Label };

LabelInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
