$(document).ready(function () {
  var timeBlock = $(".time-block")
  var saveBtn = $(".saveBtn")
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

  saveBtn.on("click", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(hour, text)
  })


  setInterval(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));
  }, 1000)
});