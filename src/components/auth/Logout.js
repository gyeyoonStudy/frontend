import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SingleDialog } from "../Dialog";

function Logout({ isVisible }) {
  const [isSignOutDialog, setIsSignOutDialog] = useState(isVisible);
  const [SignOutDialogContent, setSignOutDialogContent] = useState("");
  const [SignOutDialogLink, setSignOutDialogLink] = useState("/");
  const history = useHistory();

  useEffect(() => {
    onClickSignOut();
  }, []);

  const onClickBackToLanding = () => {
    history.push(SignOutDialogLink);
  };

  const onClickSignOut = () => {
    if (!window.Kakao.isInitialized() || !window.Kakao.Auth.getAccessToken()) {
      setIsSignOutDialog(true);
      setSignOutDialogContent("로그인을 먼저 해주세요!");
      setSignOutDialogLink("/login/signin");
      return;
    }
    window.Kakao.Auth.logout(function () {
      setIsSignOutDialog(true);
      setSignOutDialogContent("로그아웃 되었습니다!");
      setSignOutDialogLink("/");
    });
  };

  return (
    <>
      {isSignOutDialog ? (
        <SingleDialog
          content={SignOutDialogContent}
          closable={true}
          isVisible={isSignOutDialog}
          onClose={onClickBackToLanding}
        />
      ) : null}
    </>
  );
}

export default Logout;
