import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../components/login/LoginPage";
import HomePage from "../components/home/HomePage";
import PortfolioHomePage from "../components/portfolio/PortfolioHomePage";

import SvY from "../components/static/SvY";
import Kiyasla from "../components/static/Kiyasla";

import ScrollToTop from "../components/common/ScrollToTop";
import ContactPage from "../components/contact/ContactPage";
import AboutPage from "../components/about/AboutPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <ScrollToTop>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PublicRoute path="/home" component={HomePage} />

        <PrivateRoute path="/portfolio/saglik-ve-yasam" component={SvY} />
        <PrivateRoute path="/portfolio/kiyasla" component={Kiyasla} />
        <PrivateRoute path="/portfolio" component={PortfolioHomePage} />
        <PrivateRoute path="/contact" component={ContactPage} />
        <PrivateRoute path="/about" component={AboutPage} />

        {/* <PrivateRoute path="/folders" component={FolderListPage} />
      <PrivateRoute path="/edit/folder/:id" component={EditFolder} />
      <PrivateRoute path="/folder/:id" component={FolderPage} />
      <PrivateRoute path="/add/folder" component={AddFolder} />

      <PrivateRoute path="/bookmarks" component={BookmarkListPage} />
      <PrivateRoute path="/edit/bookmark/:id" component={EditBookmark} />
      <PrivateRoute path="/add/bookmark/:folderId" component={AddBookmark} />
      <PrivateRoute path="/add/bookmark" component={AddBookmark} /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </ScrollToTop>
  </Router>
);

export default AppRouter;
