console.log('API route works')

//linking friends route
var friends = require('../data/friends')
module.exports = function(app) {

    // GET route for /api/friends returns friendData.

//this will post the match to the server
app.post('/api/friends', function(req, res){

  console.log(req.body)
  for(var i = 0; i < friends.length; i++){
    console.log(friends[i])
  }

  friends.push(req.body)
  res.json(friends[0])
  
});

}