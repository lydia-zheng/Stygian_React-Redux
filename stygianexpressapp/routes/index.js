var express = require('express');
const controller = require('../controller');
const addController = require('../controller/NewMessageController.js');
var router = express.Router();



 // GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
}); 


 
//place routes here
router.get('/messages', controller.getMessages);

//the route that react uses to send the new message data
//TODO: not implemented proper with front end yet; currently 404?
router.post('/add', addController.postMessage); 



module.exports = router;
