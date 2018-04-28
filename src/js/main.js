//=require components/**.*


$(window).ready(function () {
	menuShow();

	$('.intro-list').flickity({
	  // options
	  cellAlign: 'left',
	  prevNextButtons: false,
	  contain: true
	});

	$('.features-items').flickity({
	  // options
	  cellAlign: 'left',
	  prevNextButtons: false,
	  contain: true
	});

	$('.team-people').flickity({
	  // options
	  cellAlign: 'left',
	  prevNextButtons: false,
	  contain: true
	});

    filter();
})

