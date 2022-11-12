import { API_URL } from "../constants/api";

export const api = (apiUrl = API_URL) => {
  // setup any token? header? goes here
  return {
    get() {
      return fetch(apiUrl).then((response) => response.json());
    },
    // post, put, patch, ... goes here
  };
};
