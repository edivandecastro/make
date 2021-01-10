export function getAllMenus() {
  return {
    type: 'MENU_FETCH_REQUESTED'
  }
}

export function setActiveMenu(code) {
  return {
    type: 'SET_MENU_ACTIVE',
    payload: code
  }
}
