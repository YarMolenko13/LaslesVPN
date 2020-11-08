'use strict'

	; !(function ($) {
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

$(document).ready(function () {
	$('.header-menu__button').on('touchstart', function (event) {
		$('.header-menu__button, .header-menu__column_nav, .header-menu__column_auth, body').toggleClass('active');

	});


	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}

	ibg();
	window.addEventListener('scroll', function () {
		if (pageYOffset > 520) {
			$('.plan__column').addClass('anim');
		}
	});


	// slider
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			//autoplay: true,
			infinite: false,
			dots: true,
			arrows: true,
			accessibilty: false,
			slidesToShow: 3,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			// variableWidth: '50%',
			nextArrow: '<button type="button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
			prevArrow: '<button type="button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
			responsive: [
				{
					breakpoint: 930,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,
						arrows: false,
						accessibilty: true
					}
				}
			]
		});
	}
})
