import axios from 'axios';
import { call } from 'redux-saga/effects';

export default function* request(requestOptions = {}) {
  requestOptions.headers = {
    'Content-Type'               : 'application/json',
    ...requestOptions.headers
  };

  try {
    return yield call(axios, requestOptions);
  } catch (error) {
    throw error;
  }
}

export const isEmptyObject = object => Object.entries(object).length === 0 && object.constructor === Object;
