const { build } = require('../src/app')
const env = require('../src/config/env')

const create_Table_Test = "CREATE TABLE";
module.exports = setupTestEnv = () => {
    const app = build(
        { logger: true },
        {},
        { connectionString: env.POSTGRES_TEST_DB_CONNECTION_STRING }
    )

    beforeAll(async () => {
        await app.ready()
        await app.pg.query(create_Table_Test)
    })

    return app
};