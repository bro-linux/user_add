const {Router} = require('express');
const router = Router();
const {getUsersPage, postNewUser, addUsersPage} = require("../controllers/userController");

router.get("/", getUsersPage);
router.get("/add", addUsersPage)
router.post("/add", postNewUser);


module.exports = router;
