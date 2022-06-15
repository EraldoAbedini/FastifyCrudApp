const { build } = require('./app.js')
const app = build({ logger: true })

app.get('/', (request, reply) =>
    reply.send({ hello: 'world' })
)

app.listen(8000, (e, address) => {
    if (e) {
        app.log.error(e)
        process.exit(1)
    }
})