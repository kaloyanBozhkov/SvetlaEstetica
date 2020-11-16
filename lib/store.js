import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createWrapper } from 'next-redux-wrapper'

// Load reducer and saga roots
import rootReducers from 'redux/index.reducer'
import rootSaga from 'redux/index.sagas'

const bindMiddleware = (middleware) => {
  const arrMiddleware = [middleware, thunk]

  if (process.env.NODE_ENV !== 'production') {

    // Run logger in dev mode only
    const { logger } = require('redux-logger')
    
    arrMiddleware.push(logger)

    const { composeWithDevTools } = require('redux-devtools-extension')

    return composeWithDevTools(applyMiddleware(...arrMiddleware))
  }

  return applyMiddleware(...arrMiddleware)
}

export const makeStore = (context = {}) => {
  console.log('malkeStore props?.ctx', Object.keys(context?.ctx || {}))

  const initializeStore = (reducerToInitializeWith) => {

    const store = createStore(
      reducerToInitializeWith,
      bindMiddleware(sagaMiddleware)
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
  }

  const sagaMiddleware = createSagaMiddleware()

  // if is server return store as is, without setting up persist
  if (!!context?.ctx?.req) {
    return initializeStore(rootReducers)
  }

  // if called on client apply redux persist
  const persistConfig = {
    key: 'SvetlaEstetica',
    whitelist: [], // only counter will be persisted, add other reducers if needed
    storage, // if needed, use a safer storage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducers); // Create a new reducer with our existing reducer

  const store = initializeStore(persistedReducer)

  store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
