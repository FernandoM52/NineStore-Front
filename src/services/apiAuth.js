import axios from "axios";

function signIn(body) {
  const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, body);
  return promise;
}

function signgUp(body) {
  const promise = axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body);
  return promise;
}

const apiAuth = { signIn, signgUp };
export default apiAuth;
