// polyfill fetch, so works server
require('isomorphic-fetch')
const requestBuilder = require('../lib/requestBuilder')

// get API endpoint from env var
const serverSideRequestBuilder = () => requestBuilder(process.env.SANDBOX_ENDPOINT)

const ssRequests = {
    withErrorCheck: (property, response) => {
        // error check, assuming the endpoint is giving an error property as response at all
        if (!response) {
            return { error: 'The fetch failed :(' }
        } else if (response.error) {
            return { error: response.error }
        } else if (response.message) {
            return { error: response.message }
        } else if (!response[property] || response[property].length === 0) { // weirdly the API is returning an empty array for all fields, even ones not asked for... .-. why?
            return { error: `Did not find ${property} in response.` }
        }

        return response[property]
    },
    /**
     * @date 2020-11-18
     * @param {object} config: { propertyAs: 'QueryParam }
     * @returns {object} { propertyAs: _RESPONSE_ }
     */
    getMultiple: async function (config) {
        const client = serverSideRequestBuilder()
            .setEndpoint('Lookup/v1/BasicLookups/BundledLookups')
            .setMethod('GET')
            .setParams(Object.values(config).join(','))
            .setHeaders()
            .build()

        const request = await client.fetchApi()
        const response = await request.json()

        return Object.keys(config).reduce((acc, property) => ({
            ...acc,
            [property]: this.withErrorCheck(`All${config[property]}`, response) // why are responses all prefixed with All?
        }), {})
    },
    // The below are examples of requests that can be stored here for server to make use of
    getCountries: async function () {
        const client = serverSideRequestBuilder()
            .setEndpoint('Lookup/v1/BasicLookups/BundledLookups')
            .setMethod('GET')
            .setParams('Countries')
            .setHeaders()
            .build()

        const request = await client.fetchApi()
        const response = await request.json()
        return this.withErrorCheck('AllCountries', response)
    },
    // get list of questions based on language, fall back to ENG-GB for now since selecting language on FE and re-fetching is not essential part of task
    getStandardQuestions: async function (countryLanguageID) {
        const client = serverSideRequestBuilder()
            .setEndpoint('Lookup/v1/BasicLookups/BundledLookups')
            .setMethod('GET')
            .setParams('CountryLanguages')
            .setHeaders()
            .build()

        const request = await client.fetchApi()
        const response = await request.json()
        return this.withErrorCheck('Questions', response)
    },
    getMarketplaceSurvery: async function(supplierCode) {
        const client = serverSideRequestBuilder()
            .setEndpoint('Supply/v1/Surveys/AllOfferwall')
            .setMethod('GET')
            .setParams(supplierCode)
            .setHeaders()
            .build()

        const request = await client.fetchApi()
        const response = await request.json()

        // @TODO check response to be double sure which property we're after... haven't been able to find a legit supplierCode yet so basing off on docs
        return this.withErrorCheck('Surveys', response)
    }
}

module.exports = ssRequests