if (window.innerWidth <= 1024) {
  $(".overlay-menu").height(window.innerHeight);
}

window.addEventListener("resize", () => {
  $(".overlay-menu").height(window.innerHeight);
});

//Background transition start
$("a").click(function () {
  $(".transition-background").addClass("transition-background-active");
});
$("a").click(function (e) {
  e.preventDefault();
  var linkUrl = $(this).attr("href");
  setTimeout(
    function (url) {
      window.location = url;
    },
    600,
    linkUrl
  );
});
//Background transition end

//Sticky nav bar start
var mainNav = $(".navbar-wrapper");
navbarHeight = $(".navbar").height();

$(window).scroll(function () {
  if (
    !document
      .getElementById("website-wrapper")
      .classList.contains("scroll-disabled")
  ) {
    if ($(window).scrollTop() > navbarHeight * 2) {
      mainNav.addClass("burger-menu-sticky1");
    } else {
      mainNav.removeClass("burger-menu-sticky1");
    }
    if ($(window).scrollTop() > navbarHeight * 4) {
      mainNav.addClass("burger-menu-sticky2");
    } else {
      mainNav.removeClass("burger-menu-sticky2");
    }
    if ($(window).scrollTop() > navbarHeight * 6) {
      mainNav.addClass("burger-menu-inView");
    } else {
      mainNav.removeClass("burger-menu-inView");
    }
  }
});
//Sticky nav bar end

//Burger menu control start
const burger = document.querySelector(".burger-menu");
var timesClicked = 0;
var scrollTop1 = 0;
var scrollTop2 = 0;
$(".burger-menu").click(function () {
  var scrollTop1 = $(window).scrollTop();
  if (timesClicked % 2 != 0) {
    burger.classList.toggle("burger-menu-animation");
    burger.classList.toggle("burger-active");
    $(".menu-item").addClass("animation-reverse");
    $(".overlay-menu-wrapper").addClass("overlay-menu-invisible");
    $(".overlay-menu-wrapper").removeClass("overlay-menu-visible");

    $(".website-wrapper").removeClass("scroll-disabled");
    document.getElementById("background-section").style.marginTop = "0px";
    window.scrollTo(0, scrollTop2);
  } else {
    $(".overlay-menu-wrapper").removeClass("overlay-menu-invisible");
    $(".overlay-menu").addClass("keyframes-forward");
    $(".menu-item").removeClass("animation-reverse");
    $(".overlay-menu").removeClass("keyframes-reverse");
    burger.classList.toggle("burger-active");
    burger.classList.toggle("burger-menu-animation");
    $(".menu-item").addClass("menu-item-display");
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible");

    document.getElementById("background-section").style.marginTop =
      -scrollTop1 + "px";
    $(".website-wrapper").addClass("scroll-disabled ");
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
  scrollTop2 = scrollTop1;
});
//Burger menu control end

//Scroll to top button start
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  $("html,body").animate({ scrollTop: 0 }, "slow");
});
//Scroll to top button start
