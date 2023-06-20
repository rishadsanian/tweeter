/* eslint-disable no-undef */

////////////////////////////////////////////////////////////////////////////////
////                               TWEETER                                 ////
//////////////////////////////////////////////////////////////////////////////

//When dom is ready
$(document).ready(function() {
  setUserName(userName,avatar); // ./user-settings.js -> loads username and avatar
  
  counter(); // ./composer-char-counter.js -> counts and displays number of characters in the form

  scrollToNewTweet();
  
  loadTweets();// ./load-tweets.js loads -> tweets from JSON and keeps it updated on any new tweet submissions
  
  asyncSubmit();// ./async-submit.js -> performs async post for tweet form submission, includes error handling and resets

});
/////////////////////////////////////////////////////////////////////////////
