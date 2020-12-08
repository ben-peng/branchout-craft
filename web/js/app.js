const toursPackagesWrapper = '.tours-packages-wrapper';
const toursContainer = '.tours';

const heroWrapper = '.hero-wrapper';
const heroContainer = '.hero-carousel';

const iconWrapper = '.icons-wrapper';
const iconsContainer = '.icons-carousel';

// copyright date to current year
$('.copyright-year').ready(function () {
  const d = new Date();
  const n = d.getFullYear();
  $('.copyright-year').html(n);
});

$('.call-to-action a').hover(
  function () {
    $(this).addClass('underline');
  },
  function () {
    $(this).removeClass('underline');
  }
);

var zCurrent = 2;
$('.bio-image').click(function () {
  $(this).css({ 'z-index': zCurrent });
  zCurrent++;
  console.log($(this));
});

/* Carousels */
// Function to change slides when the carousel previous and next sides are clicked
var tourCurrentSlide = 0;
var heroCurrentSlide = 0;
var iconCurrentSlide = 0;
var iconCarouselPosition = 25;

var moveSlide = function (slide, sectionName, carouselContainer) {
  var leftPosition = -slide * 100 + 'vw';
  $(carouselContainer).css('left', leftPosition);

  var slideNumber = slide + 1;
  $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
  $(sectionName + ' .carousel-indicator:nth-child(' + slideNumber + ')').addClass(
    'carousel-indicator-current'
  );
};

var moveSlideIcons = function (slide, carouselPositioning, sectionName, carouselContainer) {
  var iconsLeftPosition = iconCarouselPosition + 'vw';
  $(carouselContainer).css('transform', 'translateX(' + iconsLeftPosition + ')');

  var slideNumber = slide + 1;
  $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
  $(sectionName + ' .carousel-indicator:nth-child(' + slideNumber + ')').addClass(
    'carousel-indicator-current'
  );
};

var nextSlide = function () {
  tourCurrentSlide = tourCurrentSlide + 1;
  heroCurrentSlide = heroCurrentSlide + 1;
  iconCurrentSlide = iconCurrentSlide + 1;
  iconCarouselPosition = iconCarouselPosition - 50;

  if (tourCurrentSlide >= $('.tours > div').length) {
    tourCurrentSlide = 0;
  }
  if (heroCurrentSlide >= $('.hero-carousel > div').length) {
    heroCurrentSlide = 0;
  }

  if (iconCurrentSlide >= $('.icons-carousel > div').length) {
    iconCurrentSlide = 0;
    iconCarouselPosition = 25;
  }
  // run only when tablet and smaller
  if ($(document).outerWidth() < 769) {
    moveSlide(heroCurrentSlide, heroWrapper, heroContainer);
    moveSlideIcons(iconCurrentSlide, iconCarouselPosition, iconWrapper, iconsContainer);
  }
  // run only when bigger than mobile
  if ($(document).outerWidth() > 480) {
    moveSlide(tourCurrentSlide, toursPackagesWrapper, toursContainer);
  }
};

var autoSlide = setInterval(function () {
  // runs the nextSlide function set above
  nextSlide();
}, 3000);

// Change slides when the Hero/Tours & Packages carousel indicators are clicked
const changeSlides = function (sectionName, carouselContainer) {
  $(sectionName + ' div.carousel-indicator').click(function () {
    if ($(this).is(':first-child')) {
      $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
      $(this).addClass('carousel-indicator-current');
      $(carouselContainer).css('left', '0');
      tourCurrentSlide = 0;
      heroCurrentSlide = 0;
    } else if ($(this).is(':nth-child(2)')) {
      $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
      $(this).addClass('carousel-indicator-current');
      $(carouselContainer).css('left', '-100vw');
      tourCurrentSlide = 1;
      heroCurrentSlide = 1;
    } else if ($(this).is(':nth-child(3)')) {
      $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
      $(this).addClass('carousel-indicator-current');
      $(carouselContainer).css('left', '-200vw');
      tourCurrentSlide = 2;
      heroCurrentSlide = 2;
    } else if ($(this).is(':nth-child(4)')) {
      $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
      $(this).addClass('carousel-indicator-current');
      $(carouselContainer).css('left', '-300vw');
      tourCurrentSlide = 3;
    } else if ($(this).is(':nth-child(5)')) {
      $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
      $(this).addClass('carousel-indicator-current');
      $(carouselContainer).css('left', '-400vw');
      tourCurrentSlide = 4;
    } else if ($(this).is(':nth-child(6)')) {
      $(sectionName + ' .carousel-indicator').removeClass('carousel-indicator-current');
      $(this).addClass('carousel-indicator-current');
      $(carouselContainer).css('left', '-500vw');
      tourCurrentSlide = 5;
    }
  });
};

changeSlides(toursPackagesWrapper, toursContainer);
changeSlides(heroWrapper, heroContainer);

// Change slides when the Icons carousel indicators are clicked
$('.icons-wrapper div.carousel-indicator').click(function () {
  if ($(this).is(':first-child')) {
    $('.icons-wrapper .carousel-indicator').removeClass('carousel-indicator-current');
    $(this).addClass('carousel-indicator-current');
    $('.icons-carousel').css('transform', 'translateX(25vw)');
  } else if ($(this).is(':nth-child(2)')) {
    $('.icons-wrapper .carousel-indicator').removeClass('carousel-indicator-current');
    $(this).addClass('carousel-indicator-current');
    $('.icons-carousel').css('transform', 'translateX(-25vw)');
  } else if ($(this).is(':nth-child(3)')) {
    $('.icons-wrapper .carousel-indicator').removeClass('carousel-indicator-current');
    $(this).addClass('carousel-indicator-current');
    $('.icons-carousel').css('transform', 'translateX(-75vw)');
  } else if ($(this).is(':nth-child(4)')) {
    $('.icons-wrapper .carousel-indicator').removeClass('carousel-indicator-current');
    $(this).addClass('carousel-indicator-current');
    $('.icons-carousel').css('transform', 'translateX(-125vw)');
  } else if ($(this).is(':nth-child(5)')) {
    $('.icons-wrapper .carousel-indicator').removeClass('carousel-indicator-current');
    $(this).addClass('carousel-indicator-current');
    $('.icons-carousel').css('transform', 'translateX(-175vw)');
  }
});

// Menu
$('.menu-buttons').click(function () {
  $('body').toggleClass('menu-open');
  $('.menu-l').toggleClass('open');
  $('.menu-r').toggleClass('open');
  $('.hero-carousel div h1').toggleClass('menu-open');
  $('.menu-button').toggleClass('menu-open');
  if ($('.menu-button').hasClass('menu-open')) {
    $('.menu-button span').last().html('Close');
    return false;
  } else {
    $('.menu-button span').last().html('Menu');
    return false;
  }
});

// inView
inView('.fade').on('enter', div => div.classList.add('visible'));
inView('.stamp').on('enter', img => img.classList.add('stamped'));
