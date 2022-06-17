let Users = require('../Users')
const { getUSERSopts, getUsersID, postUser, deleteUser, updateUser } = require('../schemas/schemaTodo')
const users = require('../Users')

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

    fastify.put("/:id", updateUser, (request, reply) => {
        const { id } = request.params;
        const { first_name, last_name, email } = request.body;
        const user = Users.find((user) => user.id === id);
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        reply.send(user);
    })

    done()
}

module.exports = { todoRoutes }