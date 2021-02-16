import { getAxios, baseURL } from '../service/Api'

export const getMenus = () => {
  const api = getAxios({}, baseURL['chef']);
  return api.get('/menus');
}

export const postCreateMenu = (menu) => {
  const api = getAxios({}, baseURL['chef']);
  return api.post('/menus', menu);
}
