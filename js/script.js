/* script.js 
   Author:
   Date:
*/



$(document).ready(function(){ // begin document.ready block

	//jquery code here


	$("#content").waypoint(function(dir){
		if (dir=="down") {
			$(".menu").fadeIn()			

		} else if (dir=="up") {
			$(".menu").fadeOut()	

		}
	});

	$(".hamburger").click(function(){
		$(this).hide()
		$(".menu-popout").slideDown()
	});

	$(".menu-exit").click(function(){
		$(".menu-popout").slideUp()
		$(".hamburger").show()
	});

	$("#back-to-top-button").click(function(){
		$(".menu-popout").slideUp()
		$(".hamburger").show()
	});	

	$("#about").waypoint(function(dir){
		if (dir=="down") {
			$("#about-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#more-characters-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})				

		} else if (dir=="up") {
			$(".menu-button").css({"transform": "scale(1)", "box-shadow": "none"})	

		}
	}, { offset: '20%' });

	$("#who").waypoint(function(dir){
		if (dir=="down") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})	
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	


		} else if (dir=="up") {
			$("#about-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	

		}
	}, { offset: '20%' });

	$("#timeline").waypoint(function(dir){
		if (dir=="down") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})		
			$("#timeline-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})	
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	


		} else if (dir=="up") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	

		}
	}, { offset: '20%' });

	$("#more-characters").waypoint(function(dir){
		if (dir=="down") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})		
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#char-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	


		} else if (dir=="up") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#timeline-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})	
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	

		}
	}, { offset: '20%' });

	$("#camps-map").waypoint(function(dir){
		if (dir=="down") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})		
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	


		} else if (dir=="up") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#char-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	

		}
	}, { offset: '20%' });

	$("#david").waypoint(function(dir){
		if (dir=="down") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})		
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#david-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})


		} else if (dir=="up") {
			$("#about-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#who-button").css({"transform": "scale(1)", "box-shadow": "none"})	
			$("#timeline-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#char-button").css({"transform": "scale(1)", "box-shadow": "none"})
			$("#camps-button").css({"transform": "scale(1.1)", "box-shadow": "0px 0px 3px rgb(123, 17, 60)"})
			$("#david-button").css({"transform": "scale(1)", "box-shadow": "none"})	

		}
	});


	$.get('nisei.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var nisei = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

	    	for (i = 0; i < nisei.length; i++) {
	    		console.log(nisei[i].name)
	    		$('.photos-grid').append('<div class="photo" photo_id="'+nisei[i].index+'"><img src="'+nisei[i].img+'"><div class="img-caption">'+nisei[i].name+'</div></div>')
	    	}

	    	$(".photos-grid").on("click", ".photo", function(){
				var id = Number($(this).attr("photo_id"))
				console.log(id)

				$("html").css({"overflow":"hidden"})

				$(".popup-photo img").attr("src", nisei[id].img)
				$(".popup-desc").html('<h2>'+nisei[id].name+'</h2><h3>'+nisei[id].regiment+'</h3>'+nisei[id].desc+'<i><a href="'+nisei[id].link+'" target="_blank">Read more about '+nisei[id].name+' here.<a></i>')


				$(".popup-container").fadeIn()
			});

			$(".exit").on("click", function(){

				$(".popup-container").fadeOut()
				$("html").css({"overflow":"scroll"})
			});
	});

	$.get('photo-gallery.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var characters = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

	    	for (i = 0; i < characters.length; i++) {
	    		console.log(characters[i].name)
	    		$('.char-grid').append('<div class="photo" photo_id="'+characters[i].index+'"><img src="'+characters[i].img+'"><div class="img-caption">'+characters[i].name+'</div></div>')
	    	}

	    	$(".char-grid").on("click", ".photo", function(){
				var id = Number($(this).attr("photo_id"))
				console.log(id)

				$(".popup-photo img").attr("src", characters[id].img)
				$(".popup-desc").html('<h2>'+characters[id].name+'</h2><h3>'+characters[id].regiment+'</h3><h3>'+characters[id].born+'-'+characters[id].died+'</h3>'+characters[id].desc)


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

	// var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
 //        attribution: '&copyOpenStreetMap, &copyCartoDB'
	// }).addTo(map);


	var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
	    attribution: '&copyOpenStreetMap, &copyCartoDB',
	    pane: 'labels'
	}).addTo(map);

	var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
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
	    			
	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:3});

	    			$(".back").fadeIn()

	    			$(".esri-tile").animate({"opacity": "1"})

	    		} else if (timeline_counter == timeline.length-1) {
	    			timeline_counter = 0
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)
	    			$(".timeline-content").addClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div>')
	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:3});
	    			$(".esri-tile").animate({"opacity": "0"})
	    		}

	    	})

	    	$(".back").on("click", function(){

	    		if (timeline_counter == 0) {
	    			timeline_counter = timeline.length-1;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].photo+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')

	    			$(".back").fadeIn()

	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:3});

	    		} else if (timeline_counter == 1) {
	    			timeline_counter--;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)
	    			$(".timeline-content").addClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div>')

	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:3});
	    		
	    		} else if ((timeline_counter > 1) && (timeline_counter < timeline.length)) {
	    			timeline_counter--;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)
	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].photo+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')

	    			map.flyTo([timeline[timeline_counter].lat,timeline[timeline_counter].long], timeline[timeline_counter].zoom, {animate:true, duration:3});

	    		}

	    	})

	});



}); //end document.ready block
