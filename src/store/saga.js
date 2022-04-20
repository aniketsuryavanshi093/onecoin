import createUserSaga from './createUser/saga'
import { setContext, all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        createUserSaga()
    ]);
}