const Joi = require("joi");
const users = require("../db/db.json");
const uuid = require('uuid')
const {addNewUserToDB} = require("../db/addUser") 

const getUsersPage = (req, res) => {
    res.render("users.pug", {users});
}

const addUsersPage = (req, res) => {
    res.render("addUser", {title:"Add Users"});
}

const postNewUser = async(req, res) => {
    const userSchema = Joi.object({
            name:Joi.string().required().min(5).max(15),
            skills:Joi.string().required().min(5).max(25)
        });
        
        const {error} = userSchema.validate(req.body);
        if(error)
            res.status(400).send(error.details[0].message);
        else{
            const user = {
                id: uuid.v4(),
                name:req.body.name,
                skills:req.body.skills
            }
            await addNewUserToDB(user)
            res.redirect("/users");
        // users.push(user);
    }

}


module.exports = {
    getUsersPage,
    postNewUser,
    addUsersPage
};
