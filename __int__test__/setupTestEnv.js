const { build } = require('../src/app')
const env = require('../src/config/env')

const Table_Test = "CREATE TABLE IF NOT EXISTS users (id SERIAL, first_name VARCHAR(200), last_name VARCHAR(200), email VARCHAR(200)";
const clearTableSQL = "DELETE FROM users";
const insertItemsSQL = "INSERT INTO users (first_name, last_name, email, gross_amount, net_amount, excluded_vat_amount) VALUES ($1, $2, $3, $4, $5, $6)"

module.exports = setupTestEnv = () => {
    const app = build(
        { logger: true }, {},
        { connectionString: env.POSTGRES_TEST_DB_CONNECTION_STRING }
    )

    beforeAll(async () => {
        await app.ready()
        await app.pg.query(Table_Test)
        await app.pg.query(clearTableSQL)
    })

    beforeEach(async => {
        await.pg.query(insertItemsSQL, ["Test User", "This is a test for user", 20, 16.67, 3.33])
    })

    afterEach(async => {
        await app.pg.query(clearTableSQL)
    })

    afterAll(async () => {
        app.close()
    })

    return app
}