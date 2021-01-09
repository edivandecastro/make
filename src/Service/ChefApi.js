import { getAxios, baseURL } from '../service/Api'

export const getMenus = () => {
  let api = getAxios({}, baseURL['chef']);
  return api.get('/menus');
}
