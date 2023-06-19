/* eslint-disable no-undef */

const asyncSubmit = function () {
  $(".form-new").on("submit", function (event) {
    event.preventDefault();

    //Error handling
    if ($(".error")) $(".error").remove();

    const nullErrorMessage = $("<div>")
      .addClass("error")
      .text("🛑 Empty tweet!");
    const lengthErrorMessage = $("<div>")
      .addClass("error")
      .text("🛑 Tweet too long!");

    if (!$("#tweet-text").val()) {
      return $(".new-tweet").append(nullErrorMessage);
    }
    if ($("#tweet-text").val().length > 140) {
      return $(".new-tweet").append(lengthErrorMessage);
    }

    //Posting new tweet
    const text = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: text,
      success: function () {
        //reload tweets list
        loadTweets();
        //clear textarea
        $("#tweet-text").val(""); // need to clear this better to reset counter
        //clear any error messages
        $(".error").remove();
        //counter value reset to 140
        counter();
      },
      //handle post fail errors
      error: function (xhr, status, error) {
        console.log("Request failed!");
        console.log(xhr.responseText);
      },
    });
  });
};
