$(document).ready(function () {
  // Scroll Start
  $(".anchor a").click(function () {
    var href = $(this).attr("href");
    var pos = $(href).offset().top - 120;
    $("html,body").animate({
        scrollTop: pos
    }, 800);
    return false;
});
// Scroll End
  //make timeline
  var bannerIn = new TimelineMax();

  bannerIn
      .to('#bannerIn', 1, {
        scale: 1.2,
        transformOrigin: 'center bottom',
        ease: Linear.easeInOut,
        opacity: 0,
      });

  var controller = new ScrollMagic.Controller();

  //Init  ScropMagic
  var banner = new ScrollMagic.Scene({
        triggerElement: '#bannerIn',
        triggerHook: 0,
        duration: '100%',
      })

    .setTween(bannerIn)

    // .addIndicators()
    .addTo(controller);

  //make timeline
  $('.overhiddenBox').each(function () {
    var titleInElement = $(this).find('h2');

    var animation2 = new TimelineMax();

    animation2
      .to(titleInElement, 0.5, {
        y: '0%',
        ease: 'expo.out',
      });

    var controller = new ScrollMagic.Controller();

    //Init  ScropMagic
    var scene2 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8,
      })

    .setTween(animation2)

    // .addIndicators()
    .addTo(controller);

  });

  //make timeline
  $('.fadeIn').each(function () {
    // var fadeInElement = $(this).find('.fadeIn');

    var animation = new TimelineMax();

    animation
      .from(this, 0.3, {
        opacity: 0,
        ease: Linear.easeInOut,
      });

    var controller = new ScrollMagic.Controller();

    //Init  ScropMagic
    var scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8,
      })

    .setTween(animation)

    // .addIndicators()
    .addTo(controller);

  });
  lightbox.option({
    'fitImagesInViewport': true
  })
});
