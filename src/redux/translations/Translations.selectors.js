import { createSelector } from 'reselect'

const translations = (state) => state.translationsReducer

export const translationsSelector = createSelector(
    [translations],
    (translationsReducer) => translationsReducer.translations.reduce((acc, { key, text }) => ({ ...acc, [key]: text }), {})
)

export const warningsSelector = createSelector(
    [translations],
    (translationsReducer) => translationsReducer.warnings
)

export const languageSelector = createSelector(
    [translations],
    (translationsReducer) => translationsReducer.language
)
export const scopeSelector = createSelector(
    [translations],
    (translationsReducer) => translationsReducer.scope
)