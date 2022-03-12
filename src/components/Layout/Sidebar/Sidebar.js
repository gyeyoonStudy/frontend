import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "../../../styles/theme";

import Logout from "../../auth/Logout";

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

const Menu = styled.img`
  position: fixed;
  top: 20px;
  right: 0;
  margin-right: 30px;
  float: right;
  z-index: 1000;
`;

const Boated = styled.img`
  width: 20%;
  position: fixed;
  top: 100px;
  margin-right: 10%;
  z-index: 1000;
`;

const MenuItem = styled.li`
  padding: 10% 0;
  font-size: 0.7rem;
  &:hover {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

function Sidebar({ setIsSidebarOpen, width }) {
  const [xPosition, setXPosition] = useState(width);
  const [isSignOutDialogOpen, setIsSignOutDialogOpen] = useState(false);
  const history = useHistory();
  const onClickSignOut = () => {
    setIsSignOutDialogOpen(true);
  };

  const onClickToggleMenu = () => {
    setXPosition(width);
    setTimeout(() => {
      setIsSidebarOpen((prev) => !prev);
    }, 1000);
  };

  useEffect(() => {
    setXPosition(0);
  }, []);

  return (
    <div>
      <StyledBar xPosition={xPosition} width={width} className="open">
        <Menu onClick={onClickToggleMenu} src={menu} />
        <StyledBody>
          <Boated src={boated} />
          <ul>
            <MenuItem>내 정보 수정</MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/myproject");
              }}
            >
              내 프로젝트
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/project/home");
              }}
            >
              프로젝트 홈
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/invited");
              }}
            >
              초대확인
            </MenuItem>
            <MenuItem onClick={onClickSignOut}>
              로그아웃
              {isSignOutDialogOpen && (
                <Logout isVisible={isSignOutDialogOpen} />
              )}
            </MenuItem>
          </ul>
        </StyledBody>
      </StyledBar>
    </div>
  );
}

Sidebar.propTypes = {
  setIsSidebarOpen: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default Sidebar;
