const { build } = require('../src/app')

const create_Table_Test = "CREATE TABLE";
module.exports = setupTestEnv = () => {
    const app = build(
        { logger: true },
        {},
        { connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/postgres_test' }
    )

    beforeAll(async () => {
        await app.ready()
        await app.pg.query(create_Table_Test)
    })
};