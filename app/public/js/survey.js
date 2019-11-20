$(document).ready(function () {
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        let scoresArr = [];

        $(".form-check input[type=radio]:checked").each(function () {
            let score = $(this).val();
            scoresArr.push(score);
        });

        let newFriend = {
            name: $("#name-input").val().trim(),
            photo: $("#photo-input").val().trim(),
            scores: scoresArr
        };
        console.log(newFriend);

        $
            .post("/api/friends", newFriend)
            .then(function (data) {
                console.log(data);
            });
    });
}); 