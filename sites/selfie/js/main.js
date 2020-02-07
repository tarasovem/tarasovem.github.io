$(".toggle").on("click", function () {
  $(this).toggleClass("is-active")
});

$(function () {
  var header = $(".page-header");
  var headerHandler =  function () {
    if ($(document).width() > 992) {
      if ($(document).scrollTop() > 10) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed")
      }
    }
  };

  $(window).on("load", headerHandler);
  $(document).on("scroll", headerHandler);
});
//# sourceMappingURL=main.js.map
