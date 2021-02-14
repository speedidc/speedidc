$(document).ready(function () {
    var window_width = $(window).width();
    if(window_width>998){
        $("#partner").lightSlider({
            item: 5,
            loop: true,
            slideMove: 1,
            slideMargin: 0,
            pager: true,
            enableDrag: false,
            freeMove: false,
            speed: 1000,
            auto: true,
            pause: 4000,
            pauseOnHover: false,
            enableTouch: false,
            controls: false,
            pager: false
        });
    } else if (window_width<998 && window_width>660) {
        $("#partner").lightSlider({
            item: 4,
            loop: true,
            slideMove: 1,
            slideMargin: 0,
            pager: true,
            enableDrag: false,
            freeMove: false,
            speed: 1000,
            auto: true,
            pause: 4000,
            pauseOnHover: false,
            enableTouch: false,
            controls: false,
            pager: false
        });
    } else {
        $("#partner").lightSlider({
            item: 3,
            loop: true,
            slideMove: 1,
            slideMargin: 0,
            pager: true,
            enableDrag: false,
            freeMove: false,
            speed: 1000,
            auto: true,
            pause: 4000,
            pauseOnHover: false,
            enableTouch: false,
            controls: false,
            pager: false
        });
    }
});