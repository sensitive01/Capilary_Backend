const express = require('express');
const router = express()
const reqController = require("../controllers/reqController")


router.post('/add-request', reqController.addReqForm); // Create user


module.exports = router;
