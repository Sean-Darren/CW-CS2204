document.addEventListener("DOMContentLoaded", function () {
  var visit_date = document.getElementById("date_booking");
  var visit_time = document.getElementById("time_booking");
  var visit_visitors = document.getElementById("visitors_booking");
  var visit_reset = document.getElementById("reset_booking");
  var visit_check = document.getElementById("submit_booking");
  var visit_error = document.getElementById("error_message");

  visit_check.onclick = function checkavail() {
    let date_value = visit_date.value;
    let time_value = visit_time.value;
    let visitors_value = visit_visitors.value;
    if (date_value === "" || time_value === "" || visitors_value === "") {
      document.getElementById("error_message").innerHTML =
        "Data not completed, please re-enter";
      document
        .getElementById("error_message")
        .setAttribute(
          "style",
          "color:red;text-align:center;margin-bottom:20px;font-weight:600;"
        );
      return false;
    } else if (Number(visitors_value) < 1 || isNaN(visitors_value) || Number(visitors_value)%1 != 0) {
      document.getElementById("error_message").innerHTML =
        "Please enter a valid number of people!";
      document
        .getElementById("error_message")
        .setAttribute(
          "style",
          "color:red;text-align:center;margin-bottom:20px;font-weight:600;"
        );
      return false;
    } else {
      document.getElementById("error_message").innerHTML = "";
      document
        .getElementById("error_message")
        .setAttribute("style", "display:none;");
      let visit_result = reserve(date_value, time_value, visitors_value);
      if (visit_result == true) {
        alert("Your reservation is successful!");
      } else {
        alert("Sorry, the reservation is full!");
      }
    }
  };
  visit_reset.onclick = function resetclick() {
    document.getElementById("error_message").innerHTML = "";
    document
      .getElementById("error_message")
      .setAttribute("style", "display:none;");
  };
});
