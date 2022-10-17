const express = require('express');
const router = express.Router();
const {getHomePage} = require("../controllers/homeController");

/* GET home page. */
router.get('/', getHomePage);

module.exports = router;
