const {
    getUSERSopts,
    getUsersID,
    postUser,
    deleteUser
} = require('./../../schemas/schemaTodo');

const todoUserDb = async (fastify, options, done) => {

    fastify.get('/', getUSERSopts, async (request, reply) => {
        try {
            const client = await fastify.pg.connect();
            const { rows } = await fastify.pg.query("SELECT * FROM Users");
            reply.code(201).send(rows);
        }
        catch (error) {
            reply.send(error);
        }
        finally {
            client.release();
        }
    })

    fastify.get('/:id', getUsersID, async (request, reply) => {
        try {
            const client = await fastify.pg.connect();
            const { id } = request.params;
            const { rows } = await fastify.pg.query("SELECT * FROM Users WHERE id = $1", [id]);
            reply.code(201).send(rows[0]);
        }
        catch (error) {
            reply.send(error);
        }
        finally {
            client.release();
        }
    })

    fastify.post('/', postUser, async (request, reply) => {

        try {
            const client = await fastify.pg.connect();
            const { first_name, last_name, email } = request.body
            const { rows } = await fastify.pg.query("INSERT INTO Users(first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *", [first_name, last_name, email]);
            reply.code(201).send(rows[0]);
        }
        catch (error) {
            reply.send(error);
        }
        finally {
            client.release();
        }
    })

    fastify.delete("/:id", deleteUser, async (request, reply) => {
        try {
            const client = await fastify.pg.connect();
            const { id } = request.params;
            const { rows } = await fastify.pg.query("DELETE FROM Users WHERE id = $1", [id]);
            reply.send(`The user with id ${id} was removed.`);
        }
        catch (err) {
            reply.send(err);
        }
        finally {
            client.release();
        }
    });

    done()
}

module.exports = { todoUserDb }