/* script.js 
   Author:
   Date:
*/



$(document).ready(function(){ // begin document.ready block

	//jquery code here

	$.get('photo-gallery.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var gallery = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

	    	for (i = 0; i < gallery.length; i++) {
	    		console.log(gallery[i].name)
	    		$('.photos-grid').append('<div class="photo" photo_id="'+gallery[i]+'"><img src="'+gallery[i].img+'"><div class="img-caption">'+gallery[i].name+'</div></div>')
	    	}
	});


	$(".photos-grid").on("click", ".photo", function(){
		var id = $(this).attr("photo_id")
		console.log(id)

		$(".popup-container").fadeIn()
	});

	$(".exit").on("click", function(){

		$(".popup-container").fadeOut()
	});



	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = TweenMax.to("#soldier-header", 1, {scale: 2, y: 50, opacity: 0.5, yoyo: false});

	// build scene and set duration to window height
	var scene = new ScrollMagic.Scene({triggerElement: "#scroll-trigger", duration: "100%"})
		.setTween(tween)
		.addTo(controller);

}); //end document.ready block
