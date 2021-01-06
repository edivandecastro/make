import { getAxios, baseURL } from '../service/Api'

export const AuthenticateUser = (username, password) => {
  let api = getAxios({}, baseURL['heimdall']);
  return api.post('/authenticate', {username, password});
}

export const TokenValidate = (token) => {
  let api = getAxios({ token }, baseURL['heimdall']);
  return api.get('/authenticate/validate');
}
