/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//////////////////////////////Error handling

const handleErrors = function () {
  if ($(".error")) $(".error").remove();

  //EMPTY TWEET
  const nullErrorMessage = $("<div>")
    .addClass("error")
    .css({ display: "flex", justifyContent: "space-between" })
    .append($("<div>").addClass("error-message").text("🛑 Empty tweet!"))
    .append(
      $("<div>")
        .addClass("close-btn")
        .text("x")
        .css({ color: "darkgrey", padding: "0 0.5em", cursor: "pointer"})
        .click(function() {
          $(this).parent().remove();
        })
    );

  //LENGTHY TWEET
  const lengthErrorMessage = $("<div>")
    .addClass("error")
    .css({ display: "flex", justifyContent: "space-between" })
    .append($("<div>").addClass("error-message").text("🛑 Tweet too long!"))
    .append(
      $("<div>")
        .addClass("close-btn")
        .text("x")
        .css({ color: "darkgrey", padding: "0 0.5em",cursor: "pointer" })
        .click(function() {
          $(this).parent().remove();
        })
    );

  //LOGIC
  if (!$("#tweet-text").val()) {
    return $(".new-tweet").append(nullErrorMessage);
  }
  if ($("#tweet-text").val().length > 140) {
    return $(".new-tweet").append(lengthErrorMessage);
  }
};
