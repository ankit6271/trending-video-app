import { all, fork } from 'redux-saga/effects';
import * as productSaga from "./store/saga"

export default function* rootSaga() {
    yield all([...Object.values(productSaga)].map(fork));
}