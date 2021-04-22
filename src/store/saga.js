import getData from '../Services/productApi';
import { saveProductsData } from './action';
import { actions } from './action'
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProductsData() {
  try {
    const dataFetched = yield getData();
    yield put(saveProductsData(dataFetched.videos));
  } catch (error) {
    console.log(error);
  }
}
export default function* defaultProductSaga() {
  yield takeLatest(actions.FETCH_VIDEO_DATA, fetchProductsData);
}
