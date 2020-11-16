import translationsReducer from '../Translations.reducer'
import {
 TRANSLATIONS_ADD_BULK_KEYS
} from '../Translations.constants'

describe('testing translations reducer', () => {
  const initialState = {
    translations: {},
  }

  it('should return initial state', () => {
    expect(translationsReducer(undefined)).toEqual(initialState)
  })

  it('should add bulk translations', () => {

    const payload = {
          "key": "Account.Title",
          "text": "Account",
          "isExtended": false,
          "languageId": 1,
          "partnerId": 0,
          "cacheTime": 1598452913
        }
   
    expect(translationsReducer(initialState, {
      type: TRANSLATIONS_ADD_BULK_KEYS,
      payload
    })).toEqual({
      ...initialState,
      translations: payload
    })
  })
})
