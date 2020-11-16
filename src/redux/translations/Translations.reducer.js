import {
  TRANSLATION_ADD_KEY,
  TRANSLATIONS_ADD_BULK_KEYS
} from '~/redux/translations/Translations.constants'

// Load helper 
import { setLocalItem } from '../../hooks/useLoadTranslations'

const initialState = {
  translations: {},
}

// Add new key
const addKey = (state, action) => {

  const updatedState = {
    ...state,
    translations: {
      ...state.translations,
     [action.payload.key]: action.payload.text
    }
  }

  // Update local storage with new keys
  setLocalItem('Account', updatedState.translations)

  return updatedState
}

const addBulk = (state, action) => {
  
  return {
    ...state,
    translations: {
      ...state.translations,
      ...action.payload
    }
  }

}
const translationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TRANSLATIONS_ADD_BULK_KEYS:
      return addBulk(state, action)
    case TRANSLATION_ADD_KEY:
      return addKey(state, action)
    default:
      return state
  }
}

export default translationsReducer
