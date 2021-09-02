import { put, call } from 'redux-saga/effects';
import { setAirline } from '../../redux/reducers/airlines';
import { requestGetAirlines } from '../requests/airlines';

export function* handleGetAirlines() {
  try {
    const response = yield call(requestGetAirlines);
    const { data } = response;
    yield put(setAirline(data));
  } catch (error) {
    console.log(error);
  }
}
