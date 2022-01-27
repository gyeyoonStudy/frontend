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

function Sidebar({ setisSidebarOpen, width }) {
  const [xPosition, setX] = useState(width); //1.이미 + width를 해서 오른쪽에 넣어놓음(초기에)
  const history = useHistory();

  const toggleMenu = () => {
    //toggleMenu는 닫는 동작만 있어도 된다
    setX(width); //3.안으로 들어가기
    setTimeout(() => {
      setisSidebarOpen((prev) => !prev); // 4.부모에게 상태 전달
    }, 1000);
  };

  useEffect(() => {
    setX(0); //2. 상태 변경과 동시에 꺼내서 열기 (바로 동작 ) useEffect는 화면이 다 그려진 뒤 실행됨
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
  setSidebarOpen: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default Sidebar;
