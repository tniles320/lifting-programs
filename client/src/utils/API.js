/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getProgram: function (id) {
    return axios.get(`/api/programs/${id}`);
  },
};
