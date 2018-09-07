# FriendFinder
https://code.jquery.com/jquery.js

/survey vs survey.html on homepage

  var newFriendScoreArray = req.body.score;
  var friendScore = []; 
  var bestMatch = 0;
  var count = 0; 
  for(i = 0; i < friends.length; i++){
    var diffScore = 0; 
    //compare score
    for(j = 0; j< newFriendScoreArray.length; j++){
      scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScoreArray[j])));
    }
    //add to JSON
    scoresArray.push(diffScore)
  }
  //find best match after comparison with all friends data
  for(i=0; i<scoresArray; i++){
    if(scoresArray[i] <= diffScore[bestMatch]){
      bestMatch = i; 
    }
  }
  //return best match
  var yourMatch = friendsArray[bestMatch]; 
  res.json(yourMatch); 
  friendsArray.push(req.body); 
});