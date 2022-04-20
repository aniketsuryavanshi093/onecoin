import { call, put, takeLatest } from "redux-saga/effects";
import { requestCreateUser, requestReferalLink, requestUserData, requestLogin } from "./service";
import {
  USER_SUCCESSUFULLY_CREATED,
  GET_REFERAL_LINK,
  SET_REFERAL_LINK,
  GET_USER_DETAILS,
  SET_USER_DETAILS,
  LOGIN_USER
} from "./action";

// worker Saga: will be fired on CREATE_USER  actions
function* createUserSaga(action) {
  try {
    const response = yield call(requestCreateUser, action.payload);
    const { data } = response;
    if (response) {
      yield put({ type: USER_SUCCESSUFULLY_CREATED, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getReferalLinkSaga(action) {
  try {
    const response = yield call(requestReferalLink, action.payload);
    const { data } = response
    if (response) {
      yield put({ type: SET_REFERAL_LINK, payload: data.data });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getUserDetailsSaga(action) {
  try {
    const response = yield call(requestUserData, action.payload);
    const { data } = response
    if(response) {
      yield put({type:SET_USER_DETAILS, payload : data.data})
    }
  } catch (error) {
    console.log(error);
  }
}

function* getUserLoginSaga(action) {
  try {
    const response = yield call(requestLogin, action.payload);
    const { data } = response
    if (response) {
      yield put({ type: USER_SUCCESSUFULLY_CREATED, payload: data });
    }
  } catch (error) {
    const response = yield call(requestCreateUser, action.payload);
    const { data } = response
    if (response) {
      yield put({ type: USER_SUCCESSUFULLY_CREATED, payload: data });
    }
  }
}

function* watcher() {
  yield takeLatest(LOGIN_USER, createUserSaga);
  yield takeLatest(GET_REFERAL_LINK, getReferalLinkSaga);
  yield takeLatest(GET_USER_DETAILS, getUserDetailsSaga);
  yield takeLatest(LOGIN_USER, getUserLoginSaga);
}

export default watcher;