$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

  //This is a click event function that allows the user to clear all of their events when they click this button.
  $(".clearBtn").click(function (e) {
    e.preventDefault();
    localStorage.clear();
    $("#hour-9 .description").val(JSON.parse(localStorage.getItem("9AM")));
    $("#hour-10 .description").val(JSON.parse(localStorage.getItem("10AM")));
    $("#hour-11 .description").val(JSON.parse(localStorage.getItem("11AM")));
    $("#hour-12 .description").val(JSON.parse(localStorage.getItem("12PM")));
    $("#hour-13 .description").val(JSON.parse(localStorage.getItem("1PM")));
    $("#hour-14 .description").val(JSON.parse(localStorage.getItem("2PM")));
    $("#hour-15 .description").val(JSON.parse(localStorage.getItem("3PM")));
    $("#hour-16 .description").val(JSON.parse(localStorage.getItem("4PM")));
    $("#hour-17 .description").val(JSON.parse(localStorage.getItem("5PM")));
  })


  //This is a click event function that allows the user to save their events when they click the save button.
  $(".saveBtn").click(function (e) {
    e.preventDefault();
    //This function takes the value of the description sibling of this (the one the user clicked) "saveBtn"/save button class
    var userInput = $(this).siblings(".description").val();
    //This function takes the value of the hour sibling of this (the one the user clicked) "saveBtn"/save button class
    var thisHour = $(this).siblings(".hour").text();
    //The two variable will be stored in local storage by setting the key (x,y) items with x being thisHour and y being the stringified value of the description sibling.
    localStorage.setItem(thisHour, JSON.stringify(userInput));
    //Do not stringify the keyname (in this case, thisHour)! When you try getItem it won't be the same as a stringified "9AM".
    //ex: JSON.stringify(9AM) = "9AM" but JSON.parse(localStorage.getItem("9AM")) = 9AM, therefore you can't access the item because it doesn't exist.
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
});