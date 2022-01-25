import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import logo from "../../../assets/logo_small.png";
import menu from "../../../assets/ic_menu.png";

import Sidebar from "../Sidebar/Sidebar";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  height: 50%;
  float: left;
  margin-left: 10px;
`;

const Menu = styled.img.attrs({
  src: `${menu}`,
})`
  position: fixed;
  top: 20px;
  right: 0;
  margin-right: 3%;
  float: right;
  z-index: 6;
`;

function Header() {
  const history = useHistory();
  const [isSidebar, setSidebar] = useState(false);

  const onClickMenu = () => {
    setSidebar((current) => !current);
  };

  const backHome = () => {
    history.push("/");
  };

  return (
    <div>
      <StyledHeader>
        <Logo onClick={backHome} />
        <Menu onClick={onClickMenu} />
      </StyledHeader>
      {isSidebar ? <Sidebar status={isSidebar} /> : null}
    </div>
  );
}

export default Header;
