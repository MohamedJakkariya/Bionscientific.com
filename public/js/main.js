/** @format */

//animation list: flip, slice, box3D, pixel, fade, glide, card
$(document).ready(function () {
	let open_collapse = false;

	// Switch over to plus and minus
	$('.segment-title').click((e) => {
		let elem = $(e.target.parentNode).find('span');
		if ($(elem[0]).hasClass('fa-plus')){
            $(elem[0]).addClass('fa-minus');
            $(elem[0]).removeClass('fa-plus');
        }else{
            $(elem[0]).addClass('fa-plus');
            $(elem[0]).removeClass('fa-minus');
        } 
	});

	// Navbar open
	$('.nav-open').click((e) => {
		$('.nav-open').hide();
		$('.nav-close').show();

		$('#navbar').animate({
			height: '100vh',
		});
		$('.nav-links').show();
	});

	// Navbar close
	$('.nav-close').click((e) => {
		$('.nav-open').show();
		$('.nav-close').hide();

		$('#navbar').animate({
			height: '60px',
		});
		$('.nav-links').hide();
	});

	setInterval(function () {
		$('.slideshow-container > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('.slideshow-container');
	}, 3000);
});
