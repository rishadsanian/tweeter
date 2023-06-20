/* eslint-disable no-undef */

////////////////////////////////////////////////////////////////////////////////
////                               TWEETER                                 ////
//////////////////////////////////////////////////////////////////////////////

//When dom is ready
$(document).ready(function () {
  setUserName(firstName, lastName, avatar); // ./user-settings.js -> loads username and avatar

  counter(); // ./composer-char-counter.js -> counts and displays number of characters in the form

  loadTweets(); // ./load-tweets.js loads -> tweets from JSON and keeps it updated on any new tweet submissions

  asyncSubmit(); // ./async-submit.js -> performs async post for tweet form submission, includes error handling and resets

  //Stretch
  showComposeButton();//ensures that compose button is hidden when page is ready
  $(window).on("scroll", showComposeButton); //./scroll-icons.js show to new tweet text area
  scrollToNewTweet();



});
/////////////////////////////////////////////////////////////////////////////
