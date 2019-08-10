import { fork } from 'redux-saga/effects';
import pixabaySaga from './pixabay/saga';

export default function* rootSaga() {
  yield fork(pixabaySaga);
}
