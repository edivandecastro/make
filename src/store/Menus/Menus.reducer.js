const INITIAL_STATE = {
  menus: [],
  errors: {},
  message: "",
  activeMenu: {}
};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function disableMenu(state, id) {
  if (state.activeMenu && !isEmpty(state.activeMenu)) {
    if (id !== state.activeMenu.menu._id) {
      state.activeMenu.menu.className = "";
      state.menus.splice(state.activeMenu.index, 1, state.activeMenu.menu);
    }
  }
  return state;
}

function activateMenu(state, id) {
  state = disableMenu(state, id);
  const menu = state.menus.find( menu => menu._id === id);
  const index = state.menus.findIndex(menu => menu._id === id );

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
      return activateMenu(state, action.payload);
    case 'CREATE_MENU_SUCCEEDED':
      return { ...state };
    case 'CREATE_MENU_FAILED':
      state.errors.create_menu = action.payload.error
      return { ...state };
    default:
      return state;
  }
}
