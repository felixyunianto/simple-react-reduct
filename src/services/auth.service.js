import axios from "axios";

const API_URL = "https://app-server-ta.herokuapp.com/";

const signUp = (name, username, email, password, conf_password) => {
  return axios.post(API_URL + "auth/sign-up", {
    name,
    username,
    email,
    password,
  });
};

const signIn = (username, password) => {
  return axios
    .post(API_URL + "auth/sign-in", {
      username,
      password,
    })
    .then((data) => {
      if (data.status === 200) {
        localStorage.setItem("user", JSON.stringify(data.data));
        return data.data;
      }
    });
};

const signOut = () => {
    localStorage.removeItem("user");
}

export default {signUp, signIn, signOut}
