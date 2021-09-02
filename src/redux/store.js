import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { airlinesReducer } from './reducers/airlines';
import { watcherSaga } from '../sagas/rootSaga';

const reducers = combineReducers({
  airlines: airlinesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
