const spSheet =
  "https://script.google.com/macros/s/AKfycbxvap3lEb2teNCo1AegZBrK9JDWy6GiF5gL6WWK3FnobljSXOgNQpHT47l2K-cthRYipQ/exec";

var request;
$(".request-form").on("submit", function (e) {
  e.preventDefault();
  if (request) {
    request.abort();
  }
  var $form = $(this);
  var $inputs = $form.find("input, select, button, textarea");
  if (
    !$("#Phone").val() ||
    $("#Phone").val().length < 10 ||
    $("#Phone").val().charAt("0") !== "0"
  ) {
    alert("رقم الهاتف الذي تم إدخاله غير صحيح");
  } else {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.innerHTML = "المرجوا الإنتظار...";
      });
    });
    var serializedData = $form.serialize();
    $inputs.prop("disabled", false);
    e.preventDefault();
    var request = $.ajax({
      url: spSheet,
      method: "POST",
      dataType: "jsonp",
      data: serializedData,
      success: function () {
        console.log("it worked");
      },
    });
    fbq('track', 'Lead');
    request.always(function () {
      setTimeout(function () {
        window.location.href = "success.html";
      }, 1000);
    });
  }
});
var request;
$(".request-forms").on("submit", function (e) {
  e.preventDefault();
  if (request) {
    request.abort();
  }
  var $form = $(this);
  var $inputs = $form.find("input, select, button, textarea");
  if (
    !$("#Phones").val() ||
    $("#Phones").val().length < 10 ||
    $("#Phones").val().charAt("0") !== "0"
  ) {
    alert("رقم الهاتف الذي تم إدخاله غير صحيح");
  } else {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.innerHTML = "المرجوا الإنتظار...";
      });
    });
    var serializedData = $form.serialize();
    $inputs.prop("disabled", false);
    e.preventDefault();
    var request = $.ajax({
      url: spSheet,
      method: "POST",
      dataType: "jsonp",
      data: serializedData,
      success: function () {
        console.log("it worked");
      },
    });
    fbq('track', 'Lead');
    request.always(function () {
      setTimeout(function () {
        window.location.href = "success.html";
      }, 1000);
    });
  }
});
