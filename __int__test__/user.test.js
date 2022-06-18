const setupTestEnv = require('./setupTestEnv')

const app = setupTestEnv();

describe("Intgretation tests for CRUD operations connected to test postgres Db", () => {
    test("Should create an user via POST route", async () => {
        const user = {
            first_name: "Test user 2",
            last_name: "Test user 2",
            email: "Test user 2"
        }

        const response = await app.inject({
            method: "POST",
            url: "/v2",
            payload: user
        })

        expect(response.statusCode).toBe(201)
        expect(response.json()).toMatchObject({ "first_name": "Test user 2", "last_name": "Test user 2", "email": "Test user 2" })
    })

})