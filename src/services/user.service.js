import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://app-server-ta.herokuapp.com/";

const getSquadData = () => {
  return axios.get(API_URL + "squad", {
    headers: authHeader(),
  });
};

const getTheoryData = () => {
    return axios.get(API_URL + 'theory/by-squad', {
        headers: authHeader(),
    })
}

export default {
    getSquadData, getTheoryData
}