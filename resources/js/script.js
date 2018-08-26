
//sticky nav bar
$(document).ready(function(){
	$(".js-section-features").waypoint(function(direction){
		if(direction=="down") {
			$("nav").addClass("sticky");
		}
		else {
			$("nav").removeClass("sticky");
		}
	}, {
		offset: "60px"	
	});


//buttons
	$(".js-btn-hungry").click(function(){
		$("html,body").animate({scrollTop: $(".section-plans").offset().top}, 1000);
	});

	$(".js-btn-more").click(function(){
		$("html,body").animate({scrollTop: $(".section-features").offset().top}, 1000);
	});


//navClick
	$("#logo").click(function(){
		$("html,body").animate({scrollTop: $("header").offset().top}, 1000);
	});

	$("#food").click(function(){
		$("html,body").animate({scrollTop: $(".section-features").offset().top}, 1000);
	});

	$("#work").click(function(){
		$("html,body").animate({scrollTop: $(".section-steps").offset().top}, 1000);
	});

	$("#cities").click(function(){
		$("html,body").animate({scrollTop: $(".section-cities").offset().top}, 1000);
	});

	$("#signup").click(function(){
		$("html,body").animate({scrollTop: $(".section-plans").offset().top}, 1000);
	});


//Animations
	$(".js-wp-1").waypoint(function(direction){
		$(".js-wp-1").addClass("animated fadeIn");
	}, {
		offset: "50%"
	});

	$(".js-wp-2").waypoint(function(direction){
		$(".js-wp-2").addClass("animated fadeInLeft");
	}, {
		offset: "50%"
	});

	$(".js-wp-3").waypoint(function(direction){
		$(".js-wp-3").addClass("animated fadeInUp");
	}, {
		offset: "50%"
	});

	$(".js-wp-4").waypoint(function(direction){
		$(".js-wp-4").addClass("animated jello");
	}, {
		offset: "50%"
	});


//Nav slide
	$(".mobile-nav-icon").click(function(){
		$(".main-nav").slideToggle(200);
	});


//Map
	var map = new GMaps({
	  div: '.map',
	  lat: 37.7774029,
	  lng: -122.3785528,
	  zoom: 12
	});	

	map.addMarker({
	  lat: 37.7749,
	  lng: -122.4194,
	  title: 'San Francisco',
	  infoWindow: {
	  	content: '<p>Our Head Quarter</p>'
	  }
	});
//,
});
