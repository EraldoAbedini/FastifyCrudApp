let Users = require('../Users')
const { getUSERSopts, getUsersID } = require('../schemas/schemaTodo')

function todoRoutes(fastify, options, done) {

    fastify.get('/', getUSERSopts, function (request, reply) {
        reply.send(Users)
    })

    fastify.get('/:id', getUsersID, function (request, reply) {
        const { id } = request.params
        const user = Users.find((u) => u.id === id)
        reply.send(user)
    })

    done()
}

module.exports = { todoRoutes }