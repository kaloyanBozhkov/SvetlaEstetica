// import express from 'express/lib/router/index'
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const routes = express.Router()
const serverSideRequests = require('./serverSideRequests')



// app.use( 
//     '/graphql',
//     graphqlHTTP({
//       schema: MyGraphQLSchema,
//       graphiql: true,
//     }),
//   );

routes.get('/searchSurvey/:supplierCode', async (req, res) => {
    try {
        // retrieve the GET param from url
        const supplierCode = req.params.supplierCode

        const response = await serverSideRequests.getMarketplaceSurvery(supplierCode)

        res.json(response)
    } catch (error) {
        res.json({ 
            error: error.message
        })
    }
})


module.exports = routes