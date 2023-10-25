//.ready make sures that the function doesn't run until the document is "Ready" and it is safe to do so

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function current_date(){
    var visible_date = document.getElementById("currentDay")
    var current_date = new Date();
    var current_day = current_date.getDate();
    //add one since jan starts at 0;
    var current_month = current_date.getMonth() + 1;
    var current_year = current_date.getFullYear();

    visible_date.innerText = current_month + " / " + current_day + " / " + current_year;
  }
  // current_date();

  // display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'));
  $('#currentTime').text(dayjs().format('hh:mm a'));
});
