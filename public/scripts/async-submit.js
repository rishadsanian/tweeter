/* eslint-disable no-undef */

const asyncSubmit = function() {
  $(".form-new").on("submit", function(event) {
    event.preventDefault();
    const text = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "/tweets/",
      data: text,
      success: function(response) {
        console.log("Request successful!");
        console.log(response);
        console.log(this.data);
      },
      error: function(xhr, status, error) {
        console.log("Request failed!");
        console.log(xhr.responseText);
      },
    });
  });
};

$(document).ready(function() {
  asyncSubmit();
});
