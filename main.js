$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		autoPlay: true,
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation : false
	});
	$("#owl-list-pr").owlCarousel({
		items : 4,
		lazyLoad : true,
		pagination : false,
		navigation : true
	});
	$("#owl-hot-pr").owlCarousel({
		items : 4,
		lazyLoad : true,
		pagination : false,
		navigation : true
	});
	$("#owl-list-pr-1").owlCarousel({
		items : 4,
		lazyLoad : true,
		pagination : false,
		navigation : true
	});
	$("#owl-hot-pr-1").owlCarousel({
		items : 4,
		lazyLoad : true,
		pagination : false,
		navigation : true
	});
	$("#owl-brand").owlCarousel({
		items : 3,
		lazyLoad : true,
		pagination : false,
		navigation : true
	});
	$("#owl-author").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation : false
	}); 
	$( '#example5' ).sliderPro({
		width: 680,
		height: 620,
		orientation: 'vertical',
		loop: false,
		arrows: true,
		buttons: false,
		autoplayDelay: 8000,
		thumbnailsPosition: 'right',
		thumbnailPointer: true,
		thumbnailWidth: 130,
		breakpoints: {
			800: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 270,
				thumbnailHeight: 100
			},
			500: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 120,
				thumbnailHeight: 50
			}
		}
	});    
});