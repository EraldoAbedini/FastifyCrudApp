let Users = require('../Users')

function todoRoutes(fastify, options, done) {
    fastify.get('/us', function (request, reply) {
        reply.send(Users)
    })

    fastify.get('/use/:id', function (request, reply) {
        const { id } = request.params
        const user = Users.find((u) => u.id === id)
        reply.send(user)
    })

    done()
}

module.exports = { todoRoutes }