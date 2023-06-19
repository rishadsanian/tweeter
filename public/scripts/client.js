/* eslint-disable no-undef */

//////////////////////////////////////USER NAME//////////////////////////////

const userName = "Current User";

const setUserName = function (userName) {
  $(".user-name").text(userName);
};

////////////////////////////////////////ALL TWEETS CONTAINER///////////////
const loadTweets = function() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: function (data) {
      renderTweets(data);
    },
  });
};
////////////////////////////////////////////////////////////////////////////////
const createTweetElement = function(data) {
  const name = data.user.name;
  const avatar = data.user.avatars;
  const handle = data.user.handle;
  const text = data.content.text;
  const createdAt = data.createdAt; //needs to be formated as days

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

  //The above skeleton has been built with jQuery below for security advantages as mentioned in the lecture;
  const $article = $("<article>").addClass("tweets");

  //header
  const $header = $("<header>");

  const $user = $("<div>")
    .addClass("user")
    .append($("<img>").addClass("avt").attr("src", avatar))
    .append(name);

  const $userHandle = $("<div>").addClass("user-handle").text(handle);

  $header.append($user).append($userHandle);

  //tweet
  const $tweetText = $("<p>").addClass("tweet").text(text);

  //footer
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

  //append all elements to article
  $article.append($header).append($tweetText).append($footer);
  return $article;
};

//adds all tweets in data into tweets-container
const renderTweets = function (tweets) {
  const $tweetsContainer = $(".tweets-container");
  for (tweet of tweets) {
    newTweet = createTweetElement(tweet);
    $tweetsContainer.prepend(newTweet);
  }
};


////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  setUserName(userName);
  counter();
  loadTweets();
  asyncSubmit();
});

