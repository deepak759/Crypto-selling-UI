$(document).ready(function () {
  $(".nav-toggler").each(function (_, navtoggler) {
    var target = $(navtoggler).data("target");
    $(navtoggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});
