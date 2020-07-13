var express = require('express');
var { uuid } = require('uuidv4'); 
var router = express.Router();


//TEMPORARY -- TODO: fix later
/* let users = [
  {
    id: '1',
    username: 'smah',
    firstName: 'Stepahie',
    lastName: "Mah"
  }
];

/* GET users listing. */


/* router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(users);
});
 

 router.get('/:userId', function(req, res, next) {
  const foundUser = users.find(user => user.id === req.params.userId);
  res.setHeader('Content-Type', 'application/json');
  res.send(foundUser);
});

router.post('/', function (req, res, next){
  const newUser = req.body;
  newUser.id = uuid();
  users.push(newUser);
  res.setHeader('Content-Type', 'application/json');
  res.send(newUser);
}) */

module.exports = router;
