const friendsArr = require("../data/friends.js");

module.exports = function (app) {
    // Show entire array of profiles when user visits /api/friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsArr)
    });

    app.post("/api/friends", function (req, res) {

        let bestFriend = {
            name: "",
            photo: "",
            scoreDiff: 9999
        };
        let newFriend = req.body;
        let newFriendScore = newFriend.scores;
        let totalDiff;

        for (let i = 0; i < friendsArr.length; i++) {
            let potentialFriend = friendsArr[i];
            totalDiff = 0;

            for (let j = 0; j < potentialFriend.scores.length; j++) {
                let potentialFriendScore = potentialFriend.scores[j];

                totalDiff += Math.abs(parseInt(newFriendScore[j]) - parseInt(potentialFriendScore))
            };

            if (totalDiff <= bestFriend.scoreDiff) {
                bestFriend.name = potentialFriend.name;
                bestFriend.photo = potentialFriend.photo;
                bestFriend.scoreDiff = totalDiff;
            };
        };


        friendsArr.push(newFriend);
        res.json(bestFriend)
    })
};