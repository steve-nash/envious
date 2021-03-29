import axios from "axios";
import { settings } from "@/settings";

const API_SERVER = settings.API_SERVER;

export const api_routes = {
  user: {
    login: API_SERVER + "login",
    signup: API_SERVER + "signup",
    me: API_SERVER + "me"
  },
  accommodation: {
    accommodationtype: API_SERVER + "accommodationtype"
  }
};

export const apiCall = ({ url, method, ...args }) =>
  new Promise((resolve, reject) => {
    let token = localStorage.getItem("user-token") || "";

    if (token)
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      console.log(token);
    try {
      axios({
        method: method || "get",
        url: url,
        ...args
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    } catch (err) {
      reject(new Error(err));
    }
  });
