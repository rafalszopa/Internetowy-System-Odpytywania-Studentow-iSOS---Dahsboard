$(document).ready(function() {

	$('.hamburger-icon').click(function(){
		$(this).toggleClass('opened');
        $('.wrapper').toggleClass('opened-menu');
	});
    $('.menu-multi-level').click(function(){
        $(this).toggleClass('opened');
	});

	$('#datetimepicker1').datetimepicker();
});