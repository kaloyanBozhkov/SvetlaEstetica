import createSagaMiddleware, { END } from 'redux-saga'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper'

// Load redux store
import rootReducers from 'redux/index.reducer'
import rootSaga from 'redux/index.sagas'

const sagaMiddleware = createSagaMiddleware()

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

const configureStore = (preloadedState, { isServer, req = null } = {}) => {
  console.log('configureStore', (preloadedState && Object.keys(preloadedState)) || {})
  console.log('makeStore { isServer, req = null }', { isServer, req: Object.keys(req || {}) })

  /* eslint-enable */
  const store = createStore(
    rootReducers,
    bindMiddleware(sagaMiddleware),
  )

  /**
     * next-redux-saga depends on `sagaTask` being attached to the store during `getInitialProps`.
     * It is used to await the rootSaga task before sending results to the client.
     * However, next-redux-wrapper creates two server-side stores per request:
     * One before `getInitialProps` and one before SSR (see issue #62 for details).
     * On the server side, we run rootSaga during `getInitialProps` only:
     */

  // Initial run when not on server
  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore