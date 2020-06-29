var express = require('express');
const controller = require('../controller');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});

//place routes here
router.get('/messages', controller.getMessages);


/* //the route that react uses to send the new message data
//TODO: not implemented proper with front end yet
router.post('/save', (req, res) => {
  console.log('Body', req.body);
  res.json({
    msg: 'We received your data for new message.'
  })
}

); */

module.exports = router;
