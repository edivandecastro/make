import axios from 'axios';

const getAxios = ({ token }) => {
  let options = {}
  if (token) {
    options.Authorization = `Bearer ${token}`;
  }
  console.log(token);
  return axios.create({
    baseURL: 'http://localhost:3002/heimdall',
    headers: options
  });
}

export const AuthenticateUser = (username, password) => {
  let api = getAxios({});
  return api.post('/authenticate', {username, password});
}

export const TokenValidate = (token) => {
  let api = getAxios({ token });
  return api.get('/authenticate/validate');
}
