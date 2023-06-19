/* eslint-disable no-undef */

const asyncSubmit = function () {
  $(".form-new").on("submit", function (event) {
    event.preventDefault();

    //Error handling -->error-handle.js
    if (handleErrors()) return handleErrors();

    //Posting new tweet
    const text = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: text,
      success: function () {
        //reload tweets list - clear and load
        $("article.tweets ").remove();
        loadTweets();
        //clear textarea and reset counter
        $("#tweet-text").val("").trigger("input");
        //clear any error messages
        $(".error").remove();
      },
      //handle post fail errors
      error: function (xhr, status, error) {
        console.log("Request failed!");
        console.log(xhr.responseText);
      },
    });
  });
};
