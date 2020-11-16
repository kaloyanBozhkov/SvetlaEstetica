import {
    REQUEST_START, 
    REQUEST_FAIL,
    REQUEST_SUCCESS,
    REQUEST_RETRY
} from './request.constants'

export const requestStart = ({ requestConfig, successCallback, failCallback }) => ({
    type: REQUEST_START,
    payload: { requestConfig, successCallback, failCallback }
})

export const requestSuccess = (friends) => ({
    type: REQUEST_SUCCESS,
    payload: friends
})

export const requestFail = (err) => ({
    type: REQUEST_FAIL,
    payload: err
})

export const requestRetry = (previousRequestConfig) => ({
    type: REQUEST_RETRY,
    payload: previousRequestConfig
})