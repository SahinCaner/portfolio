import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from "../reducers/authReducer";

// REDUX BROWSWER PLUGIN
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
