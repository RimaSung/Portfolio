$(document).ready(function () {
    //Init ScropMagic
    var controller = new ScrollMagic.Controller();

    //loop through all elements with a class fade-in
    $('.animation').each(function () {
        //indicate var to class for each elements
        var fadeIn = $(this).find('.fadeIn');
        var fadeInRight = $(this).find('.fadeInRight');
        var animationIn = new TimelineMax();

        //animation perform
        animationIn
            .fromTo(fadeIn, 0.3, {
                autoAlpha: 0,
                scale: 0.6,
                y: '+=30',
                ease: Linear.easeNone
            })

        // build a scene
        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                //triggerHook: 0.8,
                //triggerElement: '.animation1'
            })
            .addIndicators()
            .setTween(animationIn).addTo(controller); //trigger a TweenMax tween

        //.setClassToggle('.animation', 'fade-in') //add class to element

    });
});
