const pool = require('../db');
const model = require('../model/user');

const getUsers = async (req, res) => {
    try {
        const get = await model.getUsers();
        res.status(200).json(get.rows);
    }catch(error) {
        console.log(error);
        res.status(500).send("An error occurred while getting the user");
    }
};

const createUser = async (req, res) => {
    try {
        const create = await model.createUser(req.body);
        res.status(201).send(create); // User created successfully
        }catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while creating the user");
    }
};

const deleteUser = async (req,res) => {
    const id = parseInt(req.params.id);
    try {
        const dUser = await model.deleteUser (id)
            res.status(201).send("dUser"); //  "User deleted"
    }catch(error) {
        console.log(error);
        res.status(500).send("An error occurred while delete the user");
    }


}

const updateUser = async (req, res) => {
    try{
        const update = await model.updateUser(req.body);
        res.status(201).send(update) // user updated successfully
    }catch(error){
        console.log(error);
        res.status(500).send("An error occurred while updating the user");
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
};