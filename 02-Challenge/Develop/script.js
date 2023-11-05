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

  

  function current_hour(){
    //TIME BLOCK VARIABLES
    // var hour_9 = document.getElementById("hour-9");
    // var hour_10 = document.getElementById("hour-10");
    // var hour_11 = document.getElementById("hour-11");
    // var hour_12 = document.getElementById("hour-12");
    // var hour_1 = document.getElementById("hour-1");
    // var hour_2 = document.getElementById("hour-2");
    // var hour_3 = document.getElementById("hour-3");
    // var hour_4 = document.getElementById("hour-4");
    // var hour_5 = document.getElementById("hour-5");

    var current_time = dayjs().hour();
    //day.js uses 24 hour clock ^^
    
    // move through each hour block 
    $('.time-block').each(function(){
      //THIS targets the curent referenced object
      //attr target the attribute
      //split removes the item
      var block = parseInt($(this).attr('id').split('-')[1]);
      //get to the child element to add a circle by the number
      var dot = $(this).find(".py-3");

      if(block < current_time){
        $(this).addClass('past');
        $(dot).removeClass('dot');
      }
      else if (block === current_time){
        $(this).removeClass('past');
        $(this).addClass('present');
        $(dot).addClass('dot');
      }
      else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
        $(dot).removeClass('dot');
      }
    });
  }
  
  current_hour();


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // displays the current day and the current time
  $('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'));
  $('#currentTime').text(dayjs().format('hh:mm a'));
});
