const { build } = require('./app')

const app = build({ logger: true })

app.listen(3000, (error, address) => {
    if (error) {
        app.log.error(error)
        process.exit(1)
    }
})