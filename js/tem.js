$(function() {
	$('.menu').on('click', function() {
		$(this).toggleClass('on');

		if ($(this).hasClass('on')) {
			$(this).find('img').attr('src', './img/icon-menu-close.png');
			$('nav').addClass('on');
			$('html, body').animate({scrollTop:0}, 1000, 'swing');
			document.addEventListener('touchmove', handleTouchMove, { passive: false });
		} else {
			$(this).find('img').attr('src', './img/icon-menu.png');
			$('nav').removeClass('on');
			$('html, body').animate({scrollTop:0}, 1000, 'swing');
			document.removeEventListener('touchmove', handleTouchMove, { passive: false });
		}
		
	})

    $('a[href^="#"]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

	function handleTouchMove(event) {
	    event.preventDefault();
	}
	
})