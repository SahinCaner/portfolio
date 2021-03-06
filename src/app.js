import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/authActions";
import LoadingPage from "./components/common/LoadingPage";

import "normalize.css/normalize.css";
import "toastr/build/toastr.min.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/portfolio");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/home");
  }
});
