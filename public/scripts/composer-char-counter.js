/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/////////Counts number of characters in text area and displays it


const counter = function() {

  $("#tweet-text").on("input", function() {
    //find text of counter
    let counterText = $(this).siblings(".form-footer").find(".counter");
    let counterValue = 140;
    //compute length
    counterValue = 140 - this.value.length;

    //assign text of counter to counterValue
    $(counterText).text(counterValue);

    //change color of text accordingly
    if (counterValue < 0) {
      $(counterText).css({ color: "red" });
    }
    if (counterValue >= 0) {
      $(counterText).css({ color: "black" });
    }
  });
};
