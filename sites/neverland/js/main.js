// Показывает языковую панель
$(function () {
  var switchLangButton = $(".lang-switcher__button");
  switchLangButton.on("click", function (e) {
    e.preventDefault();
    $(this).children(".lang-switcher__chevron").toggleClass("lang-switcher__chevron_active");
    $(this).siblings(".lang-switcher__list").toggleClass("lang-switcher__list_active");
  });
});

// Показывает секцию с формами оплаты
$(function () {
  var paymentButton = $('.payment__button');
  var paymentCard = $('.payment__card');
  paymentButton.on("click", function () {
    paymentCard.slideToggle();
    $(this).toggleClass("payment__button_active")
  })
});

// Выбирает форму оплаты
$(function () {
  var switchButton = $("#switch-input");
  var ticketForm = $(".payment__ticket");
  var subscriptionForm = $(".payment__subscription");
  switchButton.on("click", function () {
    ticketForm.toggle();
    subscriptionForm.toggle();
  })
});

// Подключает плагин и передает дату в value формы
$(function () {
  if (jQuery().datepicker) {
    $(".payment__datepicker").datepicker({
      onSelect: function (date) {
        $("#datepicker-input").attr("value", date)
      },
    });
  }
});

// Подключает плагин для кастомного селекта и скроллбара
$(function () {
  if (jQuery().selectric) {
    $(".input__select").selectric({
      arrowButtonMarkup: "<svg class='icon__arrow-right' role='img' title='Arrow right'><use xlink:href=\"img/sprite.svg#arrow-right\"></use></svg>",
      maxHeight: 360,
      onOpen: function () {
        $(".selectric-items ul").mCustomScrollbar({
          theme: "minimal-dark",
          mouseWheel:{ preventDefault: false }
        });
      }
    });
  }
});

// Показывает окно информации о покупке
$(function () {
  $(".summary__submit").on("click", function (e) {
    e.preventDefault();
    $(".payment__switch, .payment__ticket, .payment__subscription").hide();
    $(".payment__result").show();
  })
});

// Переходит из окна информации о покупке к покупкам
$(function () {
  $(".result__return").on("click", function () {
    $(".payment__switch, .payment__ticket").show();
    $(".payment__result").hide();
  })
});

$(document).ready(function () {
  // $(".lang-switcher__list").hide();
  $(".lang-switcher__button").on("click", function () {
    $(this).toggleClass("active").next(".lang-switcher__list").slideToggle(200);

  })
});

$(document).ready(function () {
  $(".page-header__toggle").on("click", function () {
    $(this).parent(".page-header").toggleClass("active");
  })
});
