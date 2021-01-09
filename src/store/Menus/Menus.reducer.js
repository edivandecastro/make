const INITIAL_STATE = {
  menus: [],
  error: false,
  message: ""
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MENU_FETCH_SUCCEEDED':
      return { ...state, menus: action.payload };
    case 'MENU_FETCH_FAILED':
      return { ...state, error: true, message: action.payload.message }
    default:
      return state;
  }
}
