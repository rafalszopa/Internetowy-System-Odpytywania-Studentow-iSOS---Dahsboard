$(document).ready(function() {

	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
        $('body').toggleClass('opened-menu');
	});

});