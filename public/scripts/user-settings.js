/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//////////////////////////////USER NAME AND AVATAR//////////////////////////////

//Sets username and Avatar

const userName = "Current User";
const avatar = "/images/profile-hex.png";

const setUserName = function(userName, avatar) {
  $(".user-name").text(userName);
  $(".avatar img").attr("src", avatar);
};

////////////////////////////////////////////////////////////////////////////////