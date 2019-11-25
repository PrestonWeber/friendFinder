const friendsData = require("../data/friends");

module.exports = function(app) {
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      answers: []
    };
    var answersArray = [];
    for (
      var answersIdx = 0;
      answersIdx < req.body.answers.length;
      answersIdx++
    ) {
      answersArray.push(parseInt(req.body.answers[answersIdx]));
    }
    newFriend.answers = answersArray;

    var comparisonArray = [];
    for (var friendsIdx = 0; friendsIdx < friendsData.length; friendsIdx++) {
      var currentComparison = 0;
      for (
        var newFriendIdx = 0;
        newFriendIdx < newFriend.answers.length;
        newFriendIdx++
      ) {
        currentComparison += Math.abs(
          newFriend.answers[newFriendIdx] -
            friendsData[friendsIdx].answers[newFriendIdx]
        );
      }
      comparisonArray.push(currentComparison);
    }

    var bestMatchPosition = comparisonArray.indexOf(Math.min(...comparisonArray));

    res.json(friendsData[bestMatchPosition]);
    
  });
};
