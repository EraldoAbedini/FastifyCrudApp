const getUSERSopts = {
    schema: {
        response: {
            200: {
                type: 'array',
                users: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        first_name: { type: 'string' },
                        last_name: { type: 'string' },
                        email: { type: 'string' }
                    }
                }
            }
        }
    }
};

const getUsersID = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
};

const postUser = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
};

const deleteUser = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    }
};


const updateUser = {
    schema: {
        body: {
            type: 'object',
            required: ['first_name', 'last_name', 'email'],
            properties: {
                first_name: { type: 'string' },
                last_name: { type: 'string' },
                email: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
}



module.exports = { getUSERSopts, getUsersID, postUser, deleteUser, updateUser };