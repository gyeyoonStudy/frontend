import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SingleDialog } from "../Dialog";

function Logout({ isVisible }) {
  const [isSignOutDialog, setIsSignOutDialog] = useState(isVisible);
  const [signOutDialogContent, setSignOutDialogContent] = useState("");
  const [signOutDialogLink, setSignOutDialogLink] = useState("/");
  const history = useHistory();

  useEffect(() => {
    onClickSignOut();
  }, []);

  const onClickBackToLanding = () => {
    history.push(signOutDialogLink);
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
      {isSignOutDialog && (
        <SingleDialog
          content={signOutDialogContent}
          closable={true}
          isVisible={isSignOutDialog}
          onClose={onClickBackToLanding}
        />
      )}
    </>
  );
}

export default Logout;
