$(window).load(function () {
  $(".nav_slide_button").click(function () {
    $(".pull").slideToggle();
  });
}),
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var e = $(this.hash);
        if (
          ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")),
          e.length)
        )
          return $("html,body").animate({ scrollTop: e.offset().top }, 2e3), !1;
      }
    });
  }),
  $(window).load(function () {
    $("#servicesSlider").flexslider({
      animation: "slide",
      directionNav: !1,
      controlNav: !0,
      touch: !1,
      pauseOnHover: !0,
      start: function () {
        $.waypoints("refresh");
      },
    });
  }),
  $(window).load(function () {
    $("#portfolioSlider").flexslider({
      animation: "slide",
      directionNav: !1,
      controlNav: !0,
      touch: !1,
      pauseOnHover: !0,
      start: function () {
        $.waypoints("refresh");
      },
    });
  }),
  $(window).load(function () {
    $("#teamSlider").flexslider({
      animation: "slide",
      directionNav: !1,
      controlNav: !0,
      touch: !1,
      pauseOnHover: !0,
      start: function () {
        $.waypoints("refresh");
      },
    });
  }),
  $(document).ready(function () {
    Modernizr.touch
      ? ($(".close-overlay").removeClass("hidden"),
        $(".effects .img").click(function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            $(this).hasClass("hover") || $(this).addClass("hover");
        }),
        $(".close-overlay").click(function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            $(this).closest(".img").hasClass("hover") &&
              $(this).closest(".img").removeClass("hover");
        }))
      : $(".effects .img")
          .mouseenter(function () {
            $(this).addClass("hover");
          })
          .mouseleave(function () {
            $(this).removeClass("hover");
          });
  });
