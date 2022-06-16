let Users = require('../Users')
const { getUSERSopts, getUsersID, postUser, deleteUser } = require('../schemas/schemaTodo')

function todoRoutes(fastify, options, done) {

    fastify.get('/', getUSERSopts, function (request, reply) {
        reply.send(Users)
    })

    fastify.get('/:id', getUsersID, function (request, reply) {
        const { id } = request.params
        const user = Users.find((u) => u.id === id)
        reply.send(user)
    })

    fastify.post('/', postUser, function (request, reply) {
        const { first_name, last_name, email } = request.body
        const user = { id: String(Users.length + 1), first_name, last_name, email }
        Users.push(user)
        reply.code(201).send(user)
    })

    fastify.delete('/:id', deleteUser, function (request, reply) {
        const { id } = request.params
        Users = Users.filter((user) => user.id !== id)
        reply.send(`User with id ${id} got deleted!`)
    })

    done()
}

module.exports = { todoRoutes }