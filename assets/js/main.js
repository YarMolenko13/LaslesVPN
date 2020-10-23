'use strict'

;!(function ($) {
    $.fn.classes = function (callback) {
        var classes = [];
        $.each(this, function (i, v) {
            var splitClassName = v.className.split(/\s+/);
            for (var j = 0; j < splitClassName.length; j++) {
                var className = splitClassName[j];
                if (-1 === classes.indexOf(className)) {
                    classes.push(className);
                }
            }
        });
        if ('function' === typeof callback) {
            for (var i in classes) {
                callback(classes[i]);
            }
        }
        return classes;
    };
})(jQuery);

$(document).ready(function() {
	$('.header-menu__button').on('touchstart', function(event) {
		$('.header-menu__button, .header-menu__column_nav, .header-menu__column_auth, body').toggleClass('active');

	});


	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
				
			}
		});
	}
	
	ibg();


	//slider
	if($('.slider__body').length>0){
		$('.slider__body').slick({
			//autoplay: true,
			infinite: false,
			dots: true,
			arrows: false,
			accessibilty: false,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow: '<button type="button class="slick-next"></button>',
			prevArrow: '<button type="button class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				setting: {}
			}]
		});
	}
})
