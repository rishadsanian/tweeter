/* eslint-disable no-undef */
//Error handling

const handleErrors = function () {
  if ($(".error")) $(".error").remove();

  const nullErrorMessage = $("<div>").addClass("error").text("🛑 Empty tweet!");
  const lengthErrorMessage = $("<div>")
    .addClass("error")
    .text("🛑 Tweet too long!");

  if (!$("#tweet-text").val()) {
    return $(".new-tweet").append(nullErrorMessage);
  }
  if ($("#tweet-text").val().length > 140) {
    return $(".new-tweet").append(lengthErrorMessage);
  }
};
