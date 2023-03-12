import axios from "axios";

const fetchResponse = (options) => {
  return axios.request(options);
};

export { fetchResponse };
