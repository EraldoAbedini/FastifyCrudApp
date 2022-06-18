const fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')
const fastifyPostgres = require('@fastify/postgres')

const { todoRoutes } = require('./routes/todo.js')
const { todoUserDb } = require('./routes/db/usersDbRoutes')

const build = (options = {}, optsSwagger = {}, optsPostgres = {}) => {
    const app = fastify(options)
    app.register(fastifyPostgres, optsPostgres)
    app.register(fastifySwagger, optsSwagger)
    app.register(todoRoutes, { prefix: '/v1' })
    app.register(todoUserDb, { prefix: '/v2' })
    return app
}
module.exports = { build }  