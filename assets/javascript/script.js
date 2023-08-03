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

  for(var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`))
  }
  
  setInterval(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));
  }, 1000)
});