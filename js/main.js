// java script

var scrollButton =$("#scrol");



// end java 
//  start page looding
$(window).on('load', function(){
	$(".overlay").fadeOut(3000);
});
	 // end page looding
	 // // start scrol looding
	  $(window).scroll(function(){
	  	if ($("this").scrollTop()>=500){
	 		scrollButton.show();
	 	}


	  });
	  $(function () {
	// body...
	'use strict';
	//start adjast slide
	var winH   = $(window).height(),
		navH   = $('.navbar').innerHeight();
	$('.header').height(winH -  navH);
	
});



	 // // end scrol looding


	// strart js boady
$(document).ready(function (){
		// strart button toggle
 	$(".s").click(function(){
 		$(".slider-first").toggle(2000);
 		$(".slider-second").toggle(2000);
 			 	});
 	$(".f").click(function(){
 		$(".slider-first").toggle(2000);
 		$(".slider-second").toggle(2000);
 			 	});
 			// end button toggle
 			// start about
 	$(".1").click(function (){
 		$(".menu-first").toggle(2000);
		// $(".menu-first").fadeOut(2000);
 	});
 	$(".2").click(function (){
 		$(".menu-sconed").toggle(2000);
		// $(".menu-first").fadeOut(2000);
 	});
 	$(".3").click(function (){
 		$(".menu-three").toggle(2000);
 		// $(".menu-sconed").fadeOut(2000);
 	});
 	$(".4").click(function (){
 		$(".menu-four").toggle(2000);
 		// $(".menu-three").fadeOut(2000);
 	});
 	$(".5").click(function (){
 		$(".menu-five").toggle(2000);
 		// $(".menu-four").fadeOut(2000);
 	});
 	$(".6").click(function (){
 		$(".menu-sex").toggle(2000);
 		// $(".menu-five").fadeOut(2000);
 	});

 			// end about

});
	// end js boady


