var friendsArray = [
  {
      name: "Yoda",
      photo: "https://www.starwars.com/databank/yoda",
      answers: [5,5,5,5,5,5,5,5,5,5],
      total: function() {
        for(i=0;i<answers.length;i++){
            sum +=answers[i];
        }
    }
  },
  {
    name: "Obi Wan",
    photo: "https://www.starwars.com/databank/obi-wan-kenobi",
    answers: [3,3,3,3,3,3,3,3,3,3],
    total: function() {
        for(i=0;i<answers.length;i++){
            sum +=answers[i];
        }
    }
  },
  {
    name: "Darth Vader",
    photo: "https://www.starwars.com/databank/darth-vader",
    answers: [1,1,1,1,1,1,1,1,1,1],
    total: function() {
        for(i=0;i<answers.length;i++){
            sum +=answers[i];
        }
    }
  }
]

module.exports = friendsArray;