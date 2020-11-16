import { combineReducers } from 'redux'
import modalReducer from './modal/modal.reducer'
import requestReducer from './request/request.reducer'
import { HYDRATE } from 'next-redux-wrapper'

// Redux stores
const combinedReducers = combineReducers({
    modalReducer,
    requestReducer
})

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }

        // preserve values on client side? E.g:
        // if (state.count) nextState.count = state.count // preserve count value on client side navigation

        return nextState
    } else {
        return combinedReducers(state, action)
    }
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default rootReducer
