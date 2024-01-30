// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // time-block ID to be used as a key
    let timeBlock = $(this).parent().attr("id");

    // get user input from the textarea
    let userInput = $(this).siblings(".description").val();

    // saving user input to local storage using the blockId as a key
    localStorage.setItem(timeBlock, userInput);
  });
  
    // Function to apply past, present, or future class to each time block
    function timeBlockColors() {
        // gets current hour using Day.js
        let currentHour = dayjs().hour();

    // Loop through each time block
    $(".time-block").each(function () {
        // gets the hour from the ID attribute of current time block
        // parseInt then converts this into an integer 
        let blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // resets the past, present, future classes
        // then adds the appropriate class based on current hour
        $(this).removeClass("past present future");
  
        // IF statement checks whether current block hour is classified as past, present or future
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


