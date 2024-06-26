const pool = require('../db');

const getUsers = async (req, res) => {
        return  pool.query("SELECT * FROM users ORDER BY id");

};

const createUser = async ({ firstname, lastname, username, age, birthdate }) => {
       return pool.query("INSERT INTO users (firstname, lastname, username, age, birthdate) VALUES ($1, $2, $3, $4, $5)", [firstname, lastname, username, age, birthdate]);
};

const deleteUser = async (id) => {
    return pool.query("DELETE FROM users WHERE id = $1", [id])
}

const updateUser = async ({ firstname, lastname, username, age, birthdate, id }) => {
    return pool.query("UPDATE users SET firstname = $1, lastname = $2, username = $3, age = $4, birthdate = $5 WHERE id = $6", [firstname, lastname, username, age, birthdate, parseInt(id)]);
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
};