import { firebase } from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLogin = (email, password) => {
  return dispatch => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch({ type: "LOGIN_ERROR", error: error.code });
      });
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
