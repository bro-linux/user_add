const fs = require("fs");
const path = require("path");

const addNewUserToDB = async (user) => {
    const data = () => fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
    const users = JSON.parse(data());
    users.push(user);
    fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(users), "utf-8", err => {
        if(err) throw err;
    });
    console.log("User added");
}

module.exports = {
    addNewUserToDB
};