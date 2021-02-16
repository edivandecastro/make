import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getMenus, postCreateMenu } from '../service/ChefApi'

function* fetchMenu() {
  try {
    const menu = yield call(getMenus);
    yield put({ type: 'MENU_FETCH_SUCCEEDED', payload: menu.data.menus });
  } catch (e) {
    yield put({ type: 'MENU_FETCH_FAILED', payload: { message: e.message }});
  }
}

function* createMenu(action) {
  try {
    const menu = yield call(postCreateMenu, action.payload);
    yield put({ type: 'CREATE_MENU_SUCCEEDED', payload: menu.data });
  } catch (e) {
    yield put({ type: 'CREATE_MENU_FAILED', payload: { error: e.response.data }});
  }
}

function* saga() {
  yield takeLatest('MENU_FETCH_REQUESTED', fetchMenu);
  yield takeEvery('CREATE_MENU_REQUESTED', createMenu);
}

export default saga;
