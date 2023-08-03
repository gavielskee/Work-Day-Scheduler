$(document).ready(function () {
  setInterval(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));
  }, 1000)

  var timeBlock = $(".time-block")
  var currentHour = dayjs().hour();

  timeBlock.each(function () {
    var id = $(this).attr("id").slice(5)
    if (id < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (id > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })




});