/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Stretch

////////////////////////////////////////////stretch 2/////////////////////////

// Create the floating Button
const floatingButton = $("<div>", {
  class: "floating-button",
  html: `<i class="fa-solid fa-angles-up animate-icon" style="color: #ffffff, padding:"50%";"></i>`,
});

// Add CSS styles to the button
floatingButton.css({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 999,
  backgroundColor: "#d5690a",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "100%",
  boxShadow: "0 2px 4px darkgrey)",
  cursor: "pointer",
});

//////////////////////////////////////////FORM TOGGLE///////////////////////////

//shows compose new tweet button when user scrolls past new tweet text area

const showComposeButton = function () {
  // Get the position of the new-tweet element
  const tweetPosition = $(".new-tweet").offset().top;

  // Get the current scroll position
  const scrollPosition = $(window).scrollTop();

  // Check if scrolled past
  if (scrollPosition > tweetPosition) {
    // Show the target element
    $(".compose-icon").hide();
  } else {
    // Hide the target element
    $(".compose-icon").show();
  }
};

//----------------------------------------------------------------------------//

const slideDownButton = function() {
  //on Click
  $(".fa-angles-down").click(function() {
    //slidesDown to text area
    $("#tweet-text").slideDown(function() {
      // Callback function after to focus on text area
      $("#tweet-text").focus();
    });
  });
};
//----------------------------------------------------------------------------//

const showFloatingButton = function () {
  // Get the position of the new-tweet element
  const tweetPosition = $(".new-tweet").offset().top;

  // Get the current scroll position
  const scrollPosition = $(window).scrollTop();

  // Check if scrolled past
  if (scrollPosition > tweetPosition) {
    // Show the target element
    floatingButton.show();
  } else {
    // Hide the target element
    floatingButton.hide();
  }
};

//auto scroll to text area for new tweets
// Scroll to the tweet-text element//worked better than slideup/down

const scrollToNewTweet = function () {
  //on Click
  $(".fa-angles-up").click(function () {
    //Start animation
    $("html, body").animate(
      {
        //scroll - main works better than #tweet-tex
        scrollTop: $("<main>").offset().top,
      },
      800, // animation speed

      // Focus on the tweet-text element after scrolling
      function () {
        $("#tweet-text").focus();
      }
    );
  });
};
//--------------------------------------------------------------------------//

///////BELOW NEEDS TO BE REFACTORED WITH THE TOP FUNCTIONS//////////////////
