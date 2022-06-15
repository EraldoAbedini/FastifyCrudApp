let users = require('/mnt/c/Users/User/Desktop/TODOAPP/src/Users.js')

function todoRoutes(fastify, options, done) {

    fastify.get('/us', (request, reply) => {
        reply.send(users)
    })

    done()
}

module.exports = { todoRoutes }