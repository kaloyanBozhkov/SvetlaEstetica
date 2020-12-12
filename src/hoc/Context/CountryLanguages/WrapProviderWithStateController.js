import React, { useState } from 'react'
import CountryLangProvider from './CountyLangProvider'

// this useless thing shows a workaround to a cavat of providers with state 
const WrapProviderWithStateController = ({ countryLanguages, children }) => {

     // initialize with context value passed as prop, example of u
     const [countryLangs, setCountryLangs] = useState(countryLanguages)

     /*
         functional programming - data immutability paradigm // alternative to filter approach.. one of a few alternatives
         const copy = [...countryLangs]
         copy.splice(index, 1)
    */
     const deleteCountryLang = (index) => setCountryLangs(countryLangs.filter((nah, key) => key !== index))

    return (
        <CountryLangProvider countryLanguages={countryLangs} deleteCountryLang={deleteCountryLang}>
            {children}
        </CountryLangProvider>
    )
}

export default WrapProviderWithStateController