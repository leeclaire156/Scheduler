// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//note: id attributes are formatted as id="hour-#" for each div block
$(function () {
  // TODO: Add a listener for click events on the save button. DONE
  // TODO: This code should use the id in the containing time-block as a key to save the user input in local storage.
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $(".saveBtn").click(function (e) {
    e.preventDefault();
    //TODO: have the events match with id as a key, using "this"
    //This function takes the value of the description sibling of this (the one the user clicked) "saveBtn"/save button class
    var userInput = $(this).siblings(".description").val();
    // console.log(userInput);
    //This function takes the value of the hour sibling of this (the one the user clicked) "saveBtn"/save button class
    var thisHour = $(this).siblings(".hour").text();
    //The two variable will be stored in local storage by setting the key (x,y) items with x being the stringified value of thisHour and y being the stringified value of the description sibling.
    localStorage.setItem(thisHour, JSON.stringify(userInput));
  });

  //Each hour's text box will display what was stored even after refreshing
  $("#hour-9 .description").val(JSON.parse(localStorage.getItem("9AM")));
  $("#hour-10 .description").val(JSON.parse(localStorage.getItem("10AM")));
  $("#hour-11 .description").val(JSON.parse(localStorage.getItem("11AM")));
  $("#hour-12 .description").val(JSON.parse(localStorage.getItem("12PM")));
  $("#hour-13 .description").val(JSON.parse(localStorage.getItem("1PM")));
  $("#hour-14 .description").val(JSON.parse(localStorage.getItem("2PM")));
  $("#hour-15 .description").val(JSON.parse(localStorage.getItem("3PM")));
  $("#hour-16 .description").val(JSON.parse(localStorage.getItem("4PM")));
  $("#hour-17 .description").val(JSON.parse(localStorage.getItem("5PM")));



  //Capital H denotes the usage of the 24 hour clock system providing 2 digits for the hours (09, 10, 11, 12, 13, etc)
  //parseInt converts the primitive data type into a number, making currentHour return the time as a number
  var currentHour = parseInt(dayjs().format("HH"));

  var ninthHour = $("#hour-9");
  var tenthHour = $("#hour-10");
  var eleventhHour = $("#hour-11");
  var twelfthHour = $("#hour-12");
  var firstHour = $("#hour-13");
  var secondHour = $("#hour-14");
  var thirdHour = $("#hour-15");
  var fourthHour = $("#hour-16");
  var fifthHour = $("#hour-17");

  var hourArray = [ninthHour, tenthHour, eleventhHour, twelfthHour, firstHour, secondHour, thirdHour, fourthHour, fifthHour];

  function colorBlocking() {
    //Loops through each hour in the array
    for (var i = 0; i < hourArray.length; i++) {
      //clears all existing tags
      $(hourArray[i]).removeClass("present past future");

      //hourArray[i].attr("id")] selects the current id from the hourArray that is being looped through, split("hour-") splits the hour from the "hour-#" id name and returns an object where the hour number was located in index 1.
      //parseInt converts the primitive data type into a number
      //Therefore hourArray[i].attr("id").split("hour-")[1] returns the hour as a number from the current ID that the loop is moving through
      var checkingHour = parseInt(hourArray[i].attr("id").split("hour-")[1]);

      if (checkingHour < currentHour) {
        $(hourArray[i]).addClass("past");
      } else if (checkingHour === currentHour) {
        $(hourArray[i]).addClass("present");
      } else {
        $(hourArray[i]).addClass("future");
      }
    }
  }
  colorBlocking();


  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
});
