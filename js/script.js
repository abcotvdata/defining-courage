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
	    		$('.photos-grid').append('<div class="photo" photo_id="'+gallery[i].index+'"><img src="'+gallery[i].img+'"><div class="img-caption">'+gallery[i].name+'</div></div>')
	    	}

	    	$(".photos-grid").on("click", ".photo", function(){
				var id = Number($(this).attr("photo_id"))
				console.log(id)

				$(".popup-photo img").attr("src", gallery[id].img)
				$(".popup-desc").html('<h2>'+gallery[id].name+'</h2><h3>'+gallery[id].born+'-'+gallery[id].died+'</h3>'+gallery[id].desc)


				$(".popup-container").fadeIn()
			});

			$(".exit").on("click", function(){

				$(".popup-container").fadeOut()
			});
	});


	



	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = TweenMax.to("#soldier-header", 1, {scale: 2, y: 50, opacity: 0.5, yoyo: false});

	// build scene and set duration to window height
	var scene = new ScrollMagic.Scene({triggerElement: "#scroll-trigger", duration: "100%"})
		.setTween(tween)
		.addTo(controller);


	// MAP

	var map = L.map('map', {
		minZoom: 3,
		zoomControl: false
	}).setView([32.6142717,-39.7266562], 3);

	// var pane = map.createPane('boundary', document.getElementById('map'));

	map.createPane('labels');
	map.getPane('labels').style.zIndex = 650;

	var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copyOpenStreetMap, &copyCartoDB'
	}).addTo(map);

	var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
	    attribution: '&copyOpenStreetMap, &copyCartoDB',
	    pane: 'labels'
	}).addTo(map);

	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.boxZoom.disable();
	map.keyboard.disable();


	$.get('timeline.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var timeline = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

	    	var timeline_counter = 0

	    	console.log(timeline.length)
	    	console.log(timeline_counter)

	    	$(".next").on("click", function(){

	    		if (timeline_counter < timeline.length-1) {
	    			timeline_counter++;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].photo+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')
	    			
	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:2});

	    			$(".back").fadeIn()

	    		} else if (timeline_counter == timeline.length-1) {
	    			timeline_counter = 0
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)
	    			$(".timeline-content").addClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div>')
	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:2});
	    		}

	    	})

	    	$(".back").on("click", function(){

	    		if (timeline_counter == 0) {
	    			timeline_counter = timeline.length-1;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].photo+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')

	    			$(".back").fadeIn()

	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:2});

	    		} else if (timeline_counter == 1) {
	    			timeline_counter--;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)
	    			$(".timeline-content").addClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div>')

	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:2});
	    		
	    		} else if ((timeline_counter > 1) && (timeline_counter < timeline.length)) {
	    			timeline_counter--;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)
	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].photo+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')

	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:2});

	    		}

	    	})

	});



}); //end document.ready block
