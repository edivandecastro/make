const INITIAL_STATE = {
  menus: [],
  error: false,
  message: "",
  activeMenu: {}
};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function disableMenu(state, code) {
  if (state.activeMenu && !isEmpty(state.activeMenu)) {
    if (code !== state.activeMenu.menu.code) {
      state.activeMenu.menu.className = "";
      state.menus.splice(state.activeMenu.index, 1, state.activeMenu.menu);
    }
  }
  return state;
}

function activateMenu(state, code) {
  state = disableMenu(state, code);
  const menu = state.menus.find( menu => menu.code === code );
  const index = state.menus.findIndex(menu => menu.code === code );

  if (menu.className === "") {
    menu.className = "active"
  } else {
    menu.className = ""
  }

  state.menus.splice(index, 1, menu);

  return { ...state, activeMenu: { index, menu }};
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MENU_FETCH_SUCCEEDED':
      return { ...state, menus: action.payload };
    case 'MENU_FETCH_FAILED':
      return { ...state, error: true, message: action.payload.message }
    case 'SET_MENU_ACTIVE':
      return activateMenu(state, action.payload);;
    default:
      return state;
  }
}
