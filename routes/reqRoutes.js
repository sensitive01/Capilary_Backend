const express = require('express');
const router = express()
const reqController = require("../controllers/reqController")


router.post('/add-request', reqController.addReqForm); 
router.put('/chats/:id', reqController.postComments); 
router.get('/get-all-chats/:id', reqController.getAllChats); 



module.exports = router;
