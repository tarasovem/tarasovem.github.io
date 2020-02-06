svg4everybody({
  polifill: true
});

// Показываем/скрываем боковое меню

$(document).ready(function () {
  $(".aside__open").on("click", function () {
    $(this).closest(".aside").addClass("active");
  });
  $(".aside__close").on("click", function () {
    $(this).closest(".aside").removeClass("active");
  })
});

// Обработчик бокового меню
$(document).ready(function () {
  var button = $(".site-nav__toggle");
  var otherButtons = $(".site-nav__link").not(".site-nav__toggle");
  var navigationMenu = button.closest(".aside__column");
  var subMenu = $(".site-nav__subnav");
  var subMenuReturn = $(".aside__title");
  var subMenuColumn = subMenu.closest(".aside__column");
  var desktopHandler = function () {
    subMenu.fadeOut();

    button.on("mouseenter", function () {
      subMenu.fadeIn(250);
    });

    subMenu.on("mouseleave", function () {
      subMenu.fadeOut(200);
    });

    otherButtons.hoverIntent(function () {
      subMenu.fadeOut(200);
    })
  };
  var mobileHandler = function () {
    subMenuColumn.fadeOut();
    button.on("click", function () {
      navigationMenu.fadeOut(200);
      subMenuColumn.delay(200).fadeIn(250);
    });
    subMenuReturn.on("click", function () {
      subMenuColumn.fadeOut(200);
      navigationMenu.delay(200).fadeIn(250);
    });
  };

  if ($(window).width() > 992) {
    desktopHandler();
  } else if ($(window).width() <= 992) {
    mobileHandler();
  }
});

// Инициализация слайдеров Swiper
$(document).ready(function () {
  $(".swiper-container").each(function () {
    var $this = $(this);
    var swiper = new Swiper(this, {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        1440: {
          slidesOffsetBefore: 330,
        },
        1200: {
          slidesOffsetBefore: 263,
        },
        576: {
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: $this.closest(".slider").find(".slider__arrow_next")[0],
        prevEl: $this.closest(".slider").find(".slider__arrow_prev")[0]
      }
    });
  })
});

// Аккордион на странице "Вопросы и ответы"
$(document).ready(function () {
  var descriptions = $('.accordion__desc');
  var titles = $('.accordion__title');

  descriptions.hide();

  titles.click(function () {
    $this = $(this);
    $target = $(this).next();

    if (!$this.hasClass("active")) {
      descriptions.slideUp();
      titles.removeClass("active");
      $this.addClass("active");
      $target.slideDown();
    } else if ($this.hasClass("active")) {
      $target.slideUp();
      $this.removeClass("active");
    }
  });
});

// Переключение контента табов на странице "Личный кабинет"
$(document).ready(function () {
  $(".profile__content").not(":first").hide();
  $(".profile .tabs__item").click(function () {
    $(".profile .tabs__item").removeClass("active").eq($(this).index()).addClass("active");
    $(".profile__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active")
});

// Инициализация календаря на странице "Личного кабинета"
$(".datepicker").each(function () {
  $(this).datepicker({
    inline: true,
    navTitles: {
      days: 'MM yyyy'
    },
    prevHtml: '<svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 33.7 22.9" style="transform: rotate(180deg); transform-origin: center center"><path d="M33.3 10.6L22.8.4c-.6-.5-1.5-.5-2 0-.5.6-.5 1.5 0 2l8 7.7H1.4c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.5 1.4 1.5h27.3l-7.9 7.5c-.6.5-.6 1.4-.1 2 .3.3.7.4 1 .4.3 0 .7-.1 1-.4l10.5-9.9c.3-.3.4-.6.4-1 .1-.4 0-.8-.3-1z"/></svg>',
    nextHtml: '<svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 33.7 22.9"><path d="M33.3 10.6L22.8.4c-.6-.5-1.5-.5-2 0-.5.6-.5 1.5 0 2l8 7.7H1.4c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.5 1.4 1.5h27.3l-7.9 7.5c-.6.5-.6 1.4-.1 2 .3.3.7.4 1 .4.3 0 .7-.1 1-.4l10.5-9.9c.3-.3.4-.6.4-1 .1-.4 0-.8-.3-1z"/></svg>',
  })
});

// Коллапс у карточек на странице "Личного кабинета"
$(document).ready(function () {
  var toggles = $('.card__toggle');
  var collapseElements = $('.card__collapse');

  collapseElements.hide();

  toggles.click(function () {
    $this = $(this);
    $target = $(this).next('.card__collapse');

    if (!$this.hasClass("active")) {
      collapseElements.slideUp();
      toggles.removeClass("active");
      $this.addClass("active");
      $target.slideDown();
    } else if ($this.hasClass("active")) {
      $target.slideUp();
      $this.removeClass("active");
    }
  });
});
//# sourceMappingURL=main.js.map
