//.ready make sures that the function doesn't run until the document is "Ready" and it is safe to do so

$(document).ready(function () {
  $('.saveBtn').on('click', function(){

    //get user input + associated time

    //gets the text area assoicated with the save button and records its value
    var planner_text = $(this).siblings('.description').val();

    //gets the assocaited time with the save button
    var time_saved = $(this).parent().attr('id');

    //save to local storage
    localStorage.setItem(time_saved, planner_text);
    //show notification was saved
    $('.notification').addClass('visible');

    // hides the notification after three seconds
    setTimeout(function () {
      $('.notification').removeClass('visible');
    }, 3000);
  });

  function current_hour(){

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
  
  //user stored information 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // displays the current day and the current time
  $('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'));
  $('#currentTime').text(dayjs().format('hh:mm a'));
});
