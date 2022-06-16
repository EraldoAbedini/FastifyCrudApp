const { build } = require('./app')

const app = build({ logger: true },
    {
        exposeRoute: true, routePrefix: '/docs', swagger:
            { info: { title: "Fastify API", version: "1.0.0" } }
    }
)

app.listen(3000, (error, address) => {
    if (error) {
        app.log.error(error)
        process.exit(1)
    }
})