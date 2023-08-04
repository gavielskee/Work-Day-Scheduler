$(document).ready(function () {
  var timeBlock = $(".time-block");
  var saveBtn = $(".saveBtn");
  var currentHour = dayjs().hour();

// for each timeblock div, we want to run a function, that grabs the id of the time block
// and compares that id(hour-9) number part so 9, to the current hour from dayjs(e.g. 10)
// depending on if the time block aka the time for that div is less then, greater then, or equal to the current hour
// it will apply a class of past, present or future
  timeBlock.each(function () {
    var id = $(this).attr("id").slice(5);
    if (id < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past");
    } else if (id > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future");
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present");
    };
  });

//Saves text to local storage
  saveBtn.on("click", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(hour, text);
  });

  // loop from 9 - 17, aka do something 8 times
  // and when we do those "things" i is gonna change value from 9 - 17
  // that way we can say hour-9 - hour-17 and not have to write out getItem(hour-9, hour-10 and so on)
  for(var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`));
  };
  
  setInterval(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));
  }, 1000);
});