import { combineReducers } from 'redux'
import modalReducer from './modal/modal.reducer'
import requestReducer from './request/request.reducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// @TODO replace root with individual reducers we wanna persist, no point persisting all ye?
const persistConfig = {
    key: 'root',
    storage,
}
  
// Redux stores
const rootReducer = combineReducers({ 
    modalReducer 
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default rootReducer
