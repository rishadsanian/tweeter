/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

///////////////////////////////////LOADs and DISPLAYS TWEETS////////////////////

//Gets tweets from JSON location and renders all tweets
const loadTweets = function() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: function(data) {
      renderTweets(data);
    },
  });
};
////////////////////////////////////////////////////////////////////////////////

//adds all tweets in data into tweets-container
const renderTweets = function(tweets) {
  const $tweetsContainer = $(".tweets-container");
  for (tweet of tweets) {
    newTweet = createTweetElement(tweet);
    $tweetsContainer.prepend(newTweet);
  }
};

////////////////////////////////////////////////////////////////////////////////

//Creates an article for each tweet with a header, message and footer. Made fully with jQuery - skeleton html can be found at the end of the code.

//components of the tweet
const createTweetElement = function(data) {
  const name = data.user.name;
  const avatar = data.user.avatars;
  const handle = data.user.handle;
  const text = data.content.text;
  const createdAt = data.createdAt;

  //-------------------------------------------------------------------------//

  //Parent tag
  const $article = $("<article>").addClass("tweets");

  //-------------------------------------------------------------------------//

  //Add header child
  const $header = $("<header>");

  const $user = $("<div>")
    .addClass("user")
    .append($("<img>").addClass("avt").attr("src", avatar))
    .append(name);

  const $userHandle = $("<div>").addClass("user-handle").text(handle);

  $header.append($user).append($userHandle);
  //-------------------------------------------------------------------------//

  //Add tweet child
  const $tweetText = $("<p>").addClass("tweet").text(text);

  //-------------------------------------------------------------------------//

  //Add footer child
  const $footer = $("<footer>");

  const $timeago = $("<div>")
    .addClass("timeago")
    .text(timeago.format(createdAt));

  const $actions = $("<div>").addClass("actions");
  $actions
    .append($("<i>").addClass("fa-solid fa-flag"))
    .append($("<i>").addClass("fa-solid fa-retweet"))
    .append($("<i>").addClass("fa-solid fa-heart"));

  $footer.append($timeago).append($actions);
  //-------------------------------------------------------------------------//

  //append all elements to article
  $article.append($header).append($tweetText).append($footer);
  return $article;
  //-------------------------------------------------------------------------//
};
//The below skeleton shows what has been built with jQuery  for security advantages and protection from malicious tweet types;

/*   <article class="tweets">
   <header>
     <div class="user">
      <img class="avt" src =${avatar} />
      ${name}
    </div>
    <div class="user-handle">${handle}</div>
   </header>

   <p class="tweet">
   ${text}
  </p>

  <footer>
    <div class="timeago">${timeago.format(createdAt)} days ago</div>
    <div class="actions">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>
 */

//////////////////////////////////////////////////////////////////////////
