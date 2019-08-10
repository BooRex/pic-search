import { takeEvery, call, put } from 'redux-saga/effects';
import { getMany } from '../../api/pixabay';
import { types, fetchImagesFail, fetchImagesSuccess } from './actions';

function* fetchMany(action) {
  const { payload } = action;

  try {
    const response = yield call(getMany, payload);
    yield put(fetchImagesSuccess(response.data.hits));
  } catch (error) {
    yield put(fetchImagesFail());
  }
}

export default function* pixabaySaga() {
  yield takeEvery(types.FETCH_IMAGES_START, fetchMany);
}
