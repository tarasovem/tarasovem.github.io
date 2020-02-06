$(function () {
  $.mw
    .defaults({
      width: 'auto',
      theme: 'custom',
      offset: {
        x: 0,
        y: 50
      },
      title: false
    })
    .add({
      id: 'mailing-request',
      src: 'widgets/mailing-request/mailing-request.html',
      width: 520,
      title: 'Подписка на рассылку'
    })
    .add({
      id: 'registration',
      src: 'widgets/registration/registration.html',
      width: 980,
      title: 'Регистрация'
    })
    .add({
      id: 'search',
      src: 'widgets/search/search.html',
      width: 980,
      title: 'Найдите всё необходимое'
    })
    .add({
      id: 'authorization',
      src: 'widgets/authorization/authorization.html',
      width: 520,
      title: 'Авторизация'
    })
    .add({
      id: 'mailing-success',
      src: 'widgets/mailing-success/mailing-success.html',
      width: 520
    })
    .add({
      id: 'change-password',
      src: 'widgets/change-password/change-password.html',
      width: 520,
      title: 'Изменение пароля'
    });

  // подключаем кнопки
  $('#mailing-request').on("click", function () {
    $.mw.open('mailing-request');
  });

  $('#authorization').on("click", function () {
    $.mw.open('authorization');
  });

  $('#search').on("click", function () {
    $.mw.open('search');
  });

  $('#mailing-success').on("click", function () {
    $.mw.open('mailing-success');
  });

  $('#change-password').on("click", function () {
    $.mw.open('change-password');
  });

  // скрипт вставлен в контент окна
  /*$('#registration').on("click", function () {
    debugger;
    $.mw.open('registration', null, {close: true});
  });*/
});
//# sourceMappingURL=mw.js.map
