import { takeLatest } from 'redux-saga/effects';
import { GET_AIRLINE } from '../redux/reducers/airlines';
import { handleGetAirlines } from './handlers/airlines';

export function* watcherSaga() {
  yield takeLatest(GET_AIRLINE, handleGetAirlines);
}
