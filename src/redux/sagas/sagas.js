import { put, takeEvery, delay } from 'redux-saga/effects';

function* counterSaga(action) {
  yield put({type: "LOADING_SAGA"});
  yield delay(2000);
  yield put({ type: "INCREMENT" });
}

export function* watchCounterSaga() {
  yield takeEvery("COUNTER_INCREMENT_SAGA", counterSaga);
}