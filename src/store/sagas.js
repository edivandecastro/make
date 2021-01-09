import { call, put, takeLatest } from 'redux-saga/effects';
import { getMenus } from '../service/ChefApi'

function* fetchMenu() {
  try {
    const menu = yield call(getMenus);
    yield put({ type: 'MENU_FETCH_SUCCEEDED', payload: menu.data.menus });
  } catch (e) {
    yield put({ type: 'MENU_FETCH_FAILED', payload: { message: e.message }});
  }
}

function* saga() {
  yield takeLatest('MENU_FETCH_REQUESTED', fetchMenu);
}

export default saga;
