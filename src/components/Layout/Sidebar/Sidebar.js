import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "../../../styles/theme";

import menu from "../../../assets/ic_menu.png";
import boated from "../../../assets/boated.png";

const StyledBar = styled.div`
  position: fixed;
  right: 0;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-radius: 0;
  background-color: ${theme.colors.light_blue};
  box-shadow: 0px 3px 3px 1px ${theme.colors.medium_gray};
  transition: 0.8s ease;
  transform: ${(props) => `translatex(${props.xPosition}px)`};
  width: ${(props) => `${props.width}px`};
  z-index: 999;
`;

const StyledBody = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 50%;
`;

const Menu = styled.img.attrs({
  src: `${menu}`,
})`
  position: fixed;
  top: 20px;
  right: 0;
  margin-right: 30px;
  float: right;
  z-index: 1000;
`;

const Boated = styled.img.attrs({
  src: `${boated}`,
})`
  width: 20%;
  position: fixed;
  top: 100px;
  margin-right: 10%;
  z-index: 1000;
`;

const MenuItem = styled.li`
  padding: 10% 0;
  font-size: 0.7rem;
`;

function Sidebar({ setSidebarOpen, width }) {
  const [xPosition, setX] = useState(width);
  const history = useHistory();

  const toggleMenu = () => {
    if (xPosition === width) {
      setX(0);
    } else {
      setX(width);
    }
    setTimeout(() => {
      setSidebarOpen((prev) => !prev);
    }, 1000);
  };

  useEffect(() => {
    setX(0);
  }, []);

  return (
    <div>
      <StyledBar xPosition={xPosition} width={width} className="open">
        <Menu onClick={toggleMenu} />
        <StyledBody>
          <Boated />
          <ul>
            <MenuItem>내 정보 수정</MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/home");
              }}
            >
              내 프로젝트
            </MenuItem>
            <MenuItem>초대확인</MenuItem>
            <MenuItem>로그아웃</MenuItem>
          </ul>
        </StyledBody>
      </StyledBar>
    </div>
  );
}

Sidebar.propTypes = {
  setSidebarOpen: PropTypes.func,
  width: PropTypes.number,
};

export default Sidebar;
