import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const StyledBar = styled.div`
  position: fixed;
  overflow-x: hidden;
  width: 20%;
  height: calc(100vh) !important;
  background-color: ${theme.colors.light_blue};
  z-index: 5;
  top: 0;
  float: right;
  right: 0;
  animation-duration: 0.5s;
  animation-name: slide;
  @keyframes slide {
    from {
      margin-right: -300px;
    }
    to {
      margin-right: 0;
    }
  }
`;

const StyledBody = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 50%;
`;

function Sidebar({ status }) {
  const history = useHistory();

  const handleItemClick = ({ target: { innerText } }) => {
    console.log("hanlde");
    return history.push({ pathname: "/", search: `?=${innerText}` });
  };

  return (
    <div>
      {status ? (
        <StyledBar className="open">
          <StyledBody>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </StyledBody>
        </StyledBar>
      ) : null}
    </div>
  );
}

Sidebar.propTypes = {
  status: PropTypes.bool,
};

export default Sidebar;
