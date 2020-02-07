$(document).ready(function () {
    svg4everybody({});
});

$(document).ready(function () {
   let el = $('.main-nav__list');
    if (document.documentElement.scrollWidth < 1024) {
        el.attr('ss-container', 'ss-container');
    }
});

$(document).ready(function () {
    $('.main-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
    });
});

$(document).ready(function () {
    $('.opinion-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    if (document.documentElement.scrollWidth < 1024) {
        $('.team').slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev icon-left-circled"></button>',
            nextArrow: '<button type="button" class="slick-next icon-right-circled"></button>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 561,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
    })
    }

});

$(document).ready(function () {
    $('.footer-slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev icon-left-open"></button>',
        nextArrow: '<button type="button" class="slick-next icon-right-open"></button>',
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                   slidesToShow: 3

                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 10,
        percentPosition: true
    });
});

/* Открытие страниц разделов */
function openContent(event, sectionName) {
    let i, tabcontent, tablink;

    tabcontent = document.getElementsByClassName('section-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablink = document.getElementsByClassName('item-button');
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(' active', '');

    }

    document.getElementById(sectionName).style.display = "block";
    event.currentTarget.className += " active";
}

/* Кнопка дополнительной информации в мобильной версии (три точки) */

$(document).ready(function () {
    $('#infoButtonModal').click(function () {
        $('.header-top__info').toggleClass('active');
    });
});

/* Кнопка навигационного меню в мобильном разрешении */

$(document).ready(function () {
   $('.hamburger').click(function () {
       $('.hamburger').toggleClass('is-active');
       $('.main-nav__list').toggleClass('active');
   })
});

/* Аккордион навигационного меню */

$(document).ready(function () {
    let allPanels = $('.submenu-nav');
    if (document.documentElement.scrollWidth < 1025) {
        allPanels.hide();
    }
    $('.main-nav__item.with-submenu').click(function () {
        let $this = $(this),
            $target = $this.children().eq(1);

        if(!$target.hasClass('active')) {
            allPanels.removeClass('active').slideUp();
            $target.addClass('active').slideDown();
        } else if ($target.hasClass('active')) {
            $target.removeClass('active').slideUp();
        }
    })
});

/* Минифицированное боковое меню */

$(document).ready(function () {
    const button = $('.aside-button');
    const menu = $('.section-menu');

    button.on('click', function () {
        menu.toggleClass('active');
    });
});