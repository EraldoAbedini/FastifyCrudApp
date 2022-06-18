const { build } = require('./app')

const app = build(
    {
        logger: true
    },
    {
        exposeRoute: true,
        routePrefix: '/docs', swagger:
            { info: { title: "Fastify API", version: "1.0.0" } }
    },
    {
        connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/postgres'
    }
);

app.get('/time', (req, reply) => {

    app.pg.connect(onConnect)

    function onConnect(err, client, release) {
        if (err) return reply.send(err)

        client.query(
            'SELECT now()',
            function onResult(err, result) {
                release()
                reply.send(err || result.rows[0])
            }
        )
    }
})

app.listen(3001, '0.0.0.0', (error, address) => {
    if (error) {
        app.log.error(error)
        process.exit(1)
    }
})