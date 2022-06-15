const todoRoutes = (fastify, options, done) => {
    fastify.get('/', (request, reply) => {
        reply.send({ hello: "world" })
    })

    done()
}
module.exports = { todoRoutes }