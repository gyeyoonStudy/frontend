import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/LoginPage/SignUpPage";
import SignInPage from "../pages/LoginPage/SignInPage";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/ProjectPage/CreatePage";
import DetailPage from "../pages/ProjectPage/DetailPage";
import MyProjectPage from "../pages/ProjectPage/MyProjectPage";
import InvitedPage from "../pages/InvitedPage";
import ProjectHomePage from "../pages/ProjectPage/HomePage";
import EditProjectPage from "../pages/ProjectPage/EditProject";
import ReceiptPage from "../pages/ReceiptPage";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login/signup" component={SignUpPage} />
      <Route exact path="/login/signin" component={SignInPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/myproject" component={MyProjectPage} />
      <Route exact path="/project/detail" component={DetailPage} />
      <Route exact path="/project/create" component={CreatePage} />
      <Route exact path="/project/home" component={ProjectHomePage} />
      <Route exact path="/invited" component={InvitedPage} />
      <Route exact path="/receipt" component={ReceiptPage} />
    </Switch>
  );
}

function index() {
  return <Router />;
}

export default index;
