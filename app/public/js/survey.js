$(document).ready(function () {
    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        let scoresArr = []
        let newFriend = {
            name: $("#name-input").val().trim(),
            photo: $("#photo-input").val().trim(),
            scores: scoresArr
        };
        $(".form-check input[type=radio]:checked").each(function() {
            scoresArr.push($(this).val());
        });
        console.log(scoresArr);
        

        // $
        //     .post("/api/characters", newCharacter)
        //     .then(function (data) {
        //         console.log(data);
        //         alert("Adding character...");
        //     });
    });
});