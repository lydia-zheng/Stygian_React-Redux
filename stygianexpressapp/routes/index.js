var express = require('express');
const controller = require('../controller');
const addController = require('../controller/NewMessageController.js');
const deleteController = require('../controller/deleteAllController.js');
var router = express.Router();



 // GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
}); 


 
//place routes here
router.get('/messages', controller.getMessages);

//the route that react uses to send the new message data
router.post('/add', addController.postMessage); 

//the route to delete all messages; remember to uncomment populate script in app.js afterwards
router.delete('/', deleteController.deleteAll);






module.exports = router;
