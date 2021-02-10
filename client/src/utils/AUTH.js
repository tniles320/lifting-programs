/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets user info
  getUser: function () {
    return axios.get("/auth/user");
  },
  // Logs the user out
  logout: function () {
    console.log("logout");
    return axios.post("/auth/logout");
  },
  // Log the user in
  login: function (username, password) {
    return axios.post("/auth/login", { username, password });
  },
  // New user registration
  register: function (userData) {
    return axios.post("/auth/register", userData);
  },
};
