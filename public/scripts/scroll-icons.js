/* eslint-disable no-undef */
const scrollToNewTweet = function () {
  $(".fa-angles-down").click(function () {
    $("#tweet-text")[0].scrollIntoView({
      behavior: "smooth",
    });
    $("#tweet-text").focus();
  });
};
