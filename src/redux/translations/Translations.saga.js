// import { takeLeading, put, all, call, select } from 'redux-saga/effects'
// import { REQUEST_TRANSLATIONS_PENDING, CREATE_TRANSLATION_PENDING } from '~/redux/translations/Translations.constants'
// import {
//   loadTranslationsFail,
//   loadTranslationsSuccess,
//   createTranslationSuccess,
//   createTranslationFail,
// } from '~/redux/translations/Translations.actions'

// import requestBuilder from '~/helper/fetch'
// import { languageSelector, scopeSelector, translationsSelector, warningsSelector } from './Translations.selectors'

// export function* requestTranslationsAsync() {
//   try {
   
//     // Get language and scope from store
//     const language = yield select(languageSelector)
//     const scope = yield select(scopeSelector)

//     const header = new Headers()
//     header.append('Content-Type', 'application/json')

//     const client = yield requestBuilder()
//       .setHeaders(header)
//       .setMethod('GET')
//       .setParams(`scope=${scope}&language=${language}`)
//       .setUrl('translations/list')
//       .build()

//     const request = yield client.fetchApi()
//     const response = yield request.json()

//     if (response.error) {
//       throw Error(response.error)
//     }

//     // save the successfully fetched response to localstorage
//     yield call(() => localStorage.setItem('translations', JSON.stringify({ translations: response, createdDate: new Date().getDay() })))

//     // set in redux
//     yield put(loadTranslationsSuccess(response))
//   } catch (error) {
//     yield put(loadTranslationsFail(error))
//   }
// }

// export function* requestTranslationsStart() {
//   yield takeLeading(REQUEST_TRANSLATIONS_PENDING, requestTranslationsAsync)
// }

// export function* createTranslationsAsync({ key, text }) {
//   try {
//     const header = new Headers()
//     header.append('Content-Type', 'application/json')

//     const client = yield requestBuilder()
//       .setHeaders(header)
//       .setMethod('POST')
//       .setBody({ key, text })
//       .setUrl('translations/key')
//       .build()

//     const request = yield client.fetchApi()
//     const response = yield request.json()

//     if (response.error) {
//       throw Error(response.error)
//     }

//     // set in redux
//     yield put(createTranslationSuccess(response))

//     // get updated translations from redux state
//     const translations = yield select(translationsSelector)
//     const warnings = yield select(warningsSelector)

//     // @TODO fix translations var to be same as localstorage
    
//     // save the successfully fetched new translation response to localstorage
//     yield call(() => localStorage.setItem('translations', JSON.stringify({ 
//       translations: {
//         data: [ 
//           // transform obj of key - text into arr of { key: text }
//           ...Object.keys(translations).map((key) => ({ [key]: translations[key] })),
          
//           // add the new one
//           { key: response.key, text: response.text }
//         ],
//         warnings
//       }, 
//       createdDate: new Date().getDate() 
//     })))

//   } catch (error) {
//     yield put(createTranslationFail(error))
//   }
// }

// export function* createTranslationsStart() {
//   yield takeLeading(CREATE_TRANSLATION_PENDING, requestTranslationsAsync)
// }

// export function* translationsSagas() {
//   yield all([call(requestTranslationsStart)])
// }