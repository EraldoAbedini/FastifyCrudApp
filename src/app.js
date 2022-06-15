const fastify = require('fastify')

const { todoRoutes } = require('./routes/todo.js')
const build = (options = {}) => {
    const app = fastify(options)
    app.register(todoRoutes)
    return app
}
module.exports = { build }