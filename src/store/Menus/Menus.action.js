export function actionGetAllMenus() {
  return {
    type: 'MENU_FETCH_REQUESTED'
  }
}

export function actionSetActiveMenu(id) {
  return {
    type: 'SET_MENU_ACTIVE',
    payload: id
  }
}

export function actionCreateMenu(menu) {
  return {
    type: 'CREATE_MENU_REQUESTED',
    payload: {menu}
  }
}
