import { all, call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_RETRY } from './request.constants'

import requestBuilder from 'helpers/requestBuilder'
import { requestRetry } from './request.actions'
import { openModal } from '../modal/modal.actions'

const createRequest = ({ method, body, endpoint }) => {

    const request = requestBuilder().setMethod(method).setEndpoint(endpoint)

    if (method !== 'GET') {
        const header = new Headers()
        header.append('Content-Type', 'application/json')
        request.setHeaders(header)
    }

    // if no params don't set
    if (body) {
        request.setBody(body)
    }

    return request.build()
}

export function* requestAsync({ payload: { requestConfig, successCallback, failCallback } }) {
    try {
        // build client 
        const request = yield call([createRequest(requestConfig), 'fetchApi'])

        // read body
        const response = yield call([request, 'json'])

        // if error then throw it, else fire action with success response
        if (response.error) {
            throw Error(response.error)
        }

        yield put(successCallback(response))
    } catch (error) {
        yield put(openModal('errorModal', {
            modalLabel: 'Oops! Something went wrong :(',
            label: 'Could not successfully contact the server.. he is shy so give him some time to man up!',
            error: error.message,
            errorPreText: "If you're curious.. his void is all about",

            // allow user to retry action
            onRetry: (dispatch) => dispatch(requestRetry({ requestConfig, successCallback, failCallback })),

            // only after closing modal trigger set the error in reducer
            onCloseTriggerFail: (dispatch) => dispatch(failCallback(error.message))
        }))
    }
}

// Listner
export function* requestDataStart() {
    // yield takeLatest(REQUEST_FORMATTED_DATA_START, requestAsync)
    yield takeLatest(REQUEST_RETRY, requestAsync)
}

// Export sagas
export function* requestSagas() {
    yield all([
        call(requestDataStart)
    ])
}

