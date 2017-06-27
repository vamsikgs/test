$(document).ready(function(){
    
    setTimeout(function() {
        $('.fly').removeClass('hide'); },500)
    
    setTimeout(function() {
        $('.scroll').removeClass('hide'); },2500)
    
    setTimeout(function() {
        $('.fp-viewing-0 .section-1').animate({zoom:'0.85'},'slow');
        $('.fp-viewing-0 .section-1').animate({zoom:'1'},'slow');
    },3000)
    
    if($(window).width()<480){
        $('svg').html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.65 570.14"><defs><style>.cls-1{fill:none;}</style></defs><title>Asset 7</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M92.74.41c-57.25,40.26-81,104.77-62,154,13.45,34.92,44.39,51.83,54,57,72.9,39.18,151.74-12.41,160-18,14.42-9.77,42-28.43,48-61,1-5.67,4.85-26.26-7-44-16.17-24.21-49.26-24.79-61-25-32.43-.57-56.38,15.13-71,25-15.27,10.31-26.35,21.46-44,43-42.26,51.55-65.48,79.88-82,126-8.48,23.67-11.35,44.1-17,85-11.72,84.86-17.58,127.29,6,163,18.92,28.66,47.32,40.67,67,49,57.77,24.44,111.29,13.44,132,8"/></g></g></svg>');
    }
    
    var data = Snap.path.toCubic(document.getElementsByClassName("cls-1")[0].getAttribute('d'));
    dataLength = data.length,
    points = [],
    pointsString = data.toString();
    for (var i = 0; i < dataLength; i++) {
        var seg = data[i];
        if (seg[0] === "M") {
            var point = {};
            point.x = seg[1];
            point.y = seg[2];
            points.push(point);
            } else {
                for (var j = 1; j < 6; j+=2) {
                    var point = {};
                    point.x = seg[j];
                    point.y = seg[j+1];
                    points.push(point);
                }
            }
    }
    
    $('.full').fullpage({
        responsiveWidth: 737,
        scrollBar: true,
        onLeave: function(index,nextIndex){
            if( index == 1 && nextIndex == 2 ) {
                $('.content-animate').addClass('animated bounceInLeft'); 
                $('.img-animate').addClass('animated bounceInRight').css('animation-delay','.5s');
                TweenMax.to(".dot", 8, {bezier:{type:"cubic", values:points, autoRotate:true}, force3D:true, ease:Power1.easeInOut});
            }
        }
    });
});