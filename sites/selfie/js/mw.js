$(function () {
  $.mw
    .defaults({
      width: 'auto',
      theme: 'selfie',
      offset: {
        x: 0,
        y: 50
      },
      title: false
    })
    .add({
      id: 'stocks',
      src: 'widgets/stocks/stocks.html',
      width: 800
    });
});

$(function () {
  $('.stocks__button').on("click", function (e) {
    $.mw.open('stocks')
  });
});
//# sourceMappingURL=mw.js.map
