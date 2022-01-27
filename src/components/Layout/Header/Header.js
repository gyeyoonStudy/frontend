import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assets/logo_small.png";
import menu from "../../../assets/ic_menu.png";

import Sidebar from "../Sidebar/Sidebar";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  z-index: 990;
`;

///// 출력 안됨
const Logo = styled.img`
  src: url(${(props) => props.img});
  height: 50%;
  float: left;
  margin-left: 10px;
  z-index: 990;
`;

///// 출력 안됨
const Menu = styled.img`
  src: ${menu};
  position: fixed;
  top: 20px;
  right: 0;
  margin-right: 30px;
  float: right;
  z-index: 990;
`;

const logoImagePath = "../../../assets/logo_small.png";

function Header() {
  const history = useHistory();
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const onClickMenu = () => {
    setisSidebarOpen((prev) => !prev);
  };

  const onClickBackHome = () => {
    console.log("back");
    history.push("/");
  };

  useEffect(() => {
    setisSidebarOpen(false);
  }, []);

  return (
    <div>
      <StyledHeader>
        <Logo onClick={onClickBackHome} img={logoImagePath} />
      </StyledHeader>
      <Menu onClick={onClickMenu} />
      {isSidebarOpen ? (
        <Sidebar setisSidebarOpen={setisSidebarOpen} width={300} />
      ) : null}
    </div>
  );
}

export default Header;
