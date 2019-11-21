$(document).ready(function () {
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        let scoresArr = [];

        $(".form-check input[type=radio]:checked").each(function() {
            let score = $(this).val();
            scoresArr.push(score);
        });

        let newFriend = {
            name: $("#name-input").val().trim(),
            photo: $("#photo-input").val().trim(),
            scores: scoresArr
        };
        console.log(newFriend);

        $.post("/api/friends", newFriend, function(data) {
            $("#match-name").text(data.name);
            $("#match-pic").attr("src", data.photo);
            $("#match-modal").modal("show");
        });
    });
}); 