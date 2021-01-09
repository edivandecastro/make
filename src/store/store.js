import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import menuReducer from './Menus/Menus.reducer';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const combineReducer = combineReducers({
  menus: menuReducer
});

const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
