/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//////////////////////////////////////////FORM TOGGLE///////////////////////////

//shows compose new tweet button when user scrolls past new tweet text area

const showComposeButton = function() {
  // Get the position of the new-tweet element
  const tweetPosition = $(".new-tweet").offset().top;

  // Get the current scroll position
  const scrollPosition = $(window).scrollTop();

  // Check if scrolled past
  if (scrollPosition > tweetPosition) {
    // Show the target element
    $(".compose-icon").show();
  } else {
    // Hide the target element
    $(".compose-icon").hide();
  }
};

//------------------------------------------------------------------------------//

//auto scroll to text area for new tweets
const scrollToNewTweet = function() {
  $(".fa-angles-down").click(function() {
    // Scroll to the tweet-text element
    $("html, body").animate(
      {

        //main works better than #tweet-text
        scrollTop: $("<main>").offset().top,
      },
      800,
      
      function() {
        // Focus on the tweet-text element after scrolling
        $("#tweet-text").focus();
      }
    );
  });
};
