const next = require('next')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const port = 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
    const server = express()

    // add middleware for requests
    server.use(cors())

    // handle api routes
    server.use('/api', routes)

    // handle the masked route (it's pointing to index but masked as home!)
    server.get('/home', (req, res) => {
        return app.render(req, res, '/index', req.query);
    })

    // pass every get request through Next
    server.get('*', handle)

    server.listen(port, (error) => {
        if (error) throw new Error(error)
        console.log('server listening on port ' + port)
    })
}).catch((error) => {
    console.log(error)
    process.exit(1)
})

module.exports = app