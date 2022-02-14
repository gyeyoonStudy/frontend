import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assets/logo_small.png";
import menu from "../../../assets/ic_menu.png";

import Sidebar from "../Sidebar/Sidebar";

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  z-index: 997;
`;

const Logo = styled.img`
  height: 50%;
  float: left;
  margin-left: 10px;
  z-index: 982;
`;

const Menu = styled.img`
  position: absolute;
  top: 20px;
  right: 0;
  margin-right: 30px;
  float: right;
  z-index: 997;
`;

function Header() {
  const history = useHistory();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onClickMenu = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const onClickBackHome = () => {
    console.log("back");
    history.push("/home");
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div>
      <StyledHeader>
        <Logo onClick={onClickBackHome} src={logo} />
      </StyledHeader>
      <Menu onClick={onClickMenu} src={menu} />
      {isSidebarOpen ? (
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} width={300} />
      ) : null}
    </div>
  );
}

export default Header;
