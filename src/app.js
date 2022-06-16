const fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')

const { todoRoutes } = require('./routes/todo.js')

const build = (options = {}, optsSwagger = {}) => {
    const app = fastify(options)
    app.register(fastifySwagger, optsSwagger)
    app.register(todoRoutes)
    return app
}
module.exports = { build }