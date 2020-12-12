import React from 'react'

export const Context = React.createContext()

// can store state for context provider, pass some common functions down to consumers etc.. this is just a silly countries test
const CountryLangProvider = ({ countryLanguages = [], deleteCountryLang, children }) => (
    <Context.Provider value={{ countryLanguages, deleteCountryLang }}>
        {children}
    </Context.Provider>
)

export default CountryLangProvider