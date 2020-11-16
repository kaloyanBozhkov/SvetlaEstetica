const express = require('express')
const next = require('next')
const port = 3420
const dev = provess.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()

// pass everything through Next
server.get('*', handle)

app.prepare().then(() => {
    server.listen(port, (error) => {
        if (error) throw new Error(error)
        console.log('server listening on port' + port)
    }).catch((error) => {
        console.log(error)
        process.exit(1)
    })
})