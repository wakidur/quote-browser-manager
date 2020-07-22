import axios from "axios";

export default axios.create({
  baseURL: "https://favqs.com",
  headers: {
    Authorization: 'Token token="fb86580b27753e9853fd9db872b0e59b"',
  },
});
