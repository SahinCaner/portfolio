import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { LoginPage } from "../components/login/LoginPage";
import HomePage from "../components/home/HomePage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PublicRoute path="/home" component={HomePage} exact={true} />

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
  </Router>
);

export default AppRouter;
