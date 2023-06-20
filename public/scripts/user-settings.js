/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//////////////////////////////USER NAME AND AVATAR//////////////////////////////

//Sets username and Avatar

const firstName = "Current";
const lastName = "User";
const avatar = "/images/profile-hex.png";

const setUserName = function(firstName, lastName, avatar) {
  $(".user-name").html(`<p><strong>${firstName} </strong>${lastName}</p>`);
  $(".avatar img").attr("src", avatar);
};

////////////////////////////////////////////////////////////////////////////////