import { getAxios, baseURL } from '../service/Api'

export const GetMenus = () => {
  let api = getAxios({}, baseURL['chef']);
  return api.get('/menus');
}
