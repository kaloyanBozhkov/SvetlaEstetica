import {
  TRANSLATION_ADD_KEY,
  TRANSLATIONS_ADD_BULK_KEYS
} from '../Translations.constants'

import {
  addKey,
  setTranslationsBulk
} from '../Translations.actions'

describe('testing action object creators for Translations', () => {
  
  it('should return request Translations success action object', () => {
    const response = {
      "data": [
        {
          "key": "Account.Title",
          "text": "Account",
          "isExtended": false,
          "languageId": 1,
          "partnerId": 0,
          "cacheTime": 1598452913
        }
      ],
      "warnings": []
    }


    expect(setTranslationsBulk(response)).toEqual({
      type: TRANSLATIONS_ADD_BULK_KEYS,
      payload: response
    })
  })

  it('should return request Translations success action object', () => {
    const response = {
        key: 'Account.Title',
        text: 'Account'
    }

    expect(addKey(response)).toEqual({
      type: TRANSLATION_ADD_KEY,
      payload: response
    })
  })

})