import {
  TRANSLATIONS_ADD_BULK_KEYS,
  TRANSLATION_ADD_KEY
} from '~/redux/translations/Translations.constants'

export const setTranslationsBulk = (translations) => ({
  type: TRANSLATIONS_ADD_BULK_KEYS,
  payload: translations
})

export const addKey = (translation) => ({
  type: TRANSLATION_ADD_KEY,
  payload: translation
})