$(function () {
  $.mw
    .defaults({
      width: 'auto',
      theme: 'harvest',
      offset: {
        x: 0,
        y: 50
      },
      title: false
    })
    .add({
      id: 'filter',
      src: 'widgets/filter/filter.html',
      width: 600,
      title: "Название фильтра"
    });
});

$(function () {
  $('.filter__link').on("click", function (e) {
    e.preventDefault();
    $.mw.open('filter');
  });
});
//# sourceMappingURL=mw.js.map
