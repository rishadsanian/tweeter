/* eslint-disable no-undef */

const asyncSubmit = function () {
  $(".form-new").on("submit", function (event) {
    event.preventDefault();
    if (!$("#tweet-text").val()) return alert("Empty tweet!");
    if ($("#tweet-text").val().length > 140) return alert("Tweet too long!");
    const text = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: text,
      success: function (response) {
        console.log("Request successful!");
        console.log(response);
        console.log(this.data);
      },
      error: function (xhr, status, error) {
        console.log("Request failed!");
        console.log(xhr.responseText);
      },
    });
  });
};

$(document).ready(function () {
  asyncSubmit();
});
