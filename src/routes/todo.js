let Users = require('../Users')
// const getUsers = require('../schemas/schemaTodo')

function todoRoutes(fastify, options, done) {

    fastify.get('/', function (request, reply) {
        reply.send(Users)
    })

    fastify.get('/:id', function (request, reply) {
        const { id } = request.params
        const user = Users.find((u) => u.id === id)
        reply.send(user)
    })

    done()
}

module.exports = { todoRoutes }