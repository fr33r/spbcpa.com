function initializeMap(){
	var googleMap = new google.maps.Map(document.getElementById('map'), {
  		center: {
  			lat: 39.221512, 
  			lng: -84.441454
  		},
  		zoom: 16,
      scrollwheel: false,
  		mapTypeControl: false,
  		zoomControl: false,
  		streetViewControl: false,
  		styles:   		
  		[{
  		    "featureType": "all",
  		    "elementType": "labels",
  		    "stylers": [{
  		        "visibility": "on"
  		    }]
  		}, {
  		    "featureType": "all",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "saturation": 36
  		    }, {
  		        "color": "#000000"
  		    }, {
  		        "lightness": 40
  		    }]
  		}, {
  		    "featureType": "all",
  		    "elementType": "labels.text.stroke",
  		    "stylers": [{
  		        "visibility": "on"
  		    }, {
  		        "color": "#000000"
  		    }, {
  		        "lightness": 16
  		    }]
  		}, {
  		    "featureType": "all",
  		    "elementType": "labels.icon",
  		    "stylers": [{
  		        "visibility": "off"
  		    }]
  		}, {
  		    "featureType": "administrative",
  		    "elementType": "geometry.fill",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 20
  		    }]
  		}, {
  		    "featureType": "administrative",
  		    "elementType": "geometry.stroke",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 17
  		    }, {
  		        "weight": 1.2
  		    }]
  		}, {
  		    "featureType": "administrative",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#ff0000"
  		    }]
  		}, {
  		    "featureType": "administrative.country",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#f5f5f5"
  		    }]
  		}, {
  		    "featureType": "administrative.province",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#f5f5f5"
  		    }]
  		}, {
  		    "featureType": "administrative.locality",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#c4c4c4"
  		    }]
  		}, {
  		    "featureType": "administrative.neighborhood",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#db2222"
  		    }]
  		}, {
  		    "featureType": "administrative.land_parcel",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#f5f5f5"
  		    }]
  		}, {
  		    "featureType": "landscape",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 20
  		    }]
  		}, {
  		    "featureType": "poi",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 21
  		    }, {
  		        "visibility": "on"
  		    }]
  		}, {
  		    "featureType": "poi.business",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "visibility": "on"
  		    }]
  		}, {
  		    "featureType": "road",
  		    "elementType": "geometry.stroke",
  		    "stylers": [{
  		        "visibility": "off"
  		    }]
  		}, {
  		    "featureType": "road.highway",
  		    "elementType": "geometry.fill",
  		    "stylers": [{
  		        "color": "#ff0000"
  		    }, {
  		        "lightness": "0"
  		    }]
  		}, {
  		    "featureType": "road.highway",
  		    "elementType": "geometry.stroke",
  		    "stylers": [{
  		        "visibility": "off"
  		    }]
  		}, {
  		    "featureType": "road.highway",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#ffffff"
  		    }]
  		}, {
  		    "featureType": "road.highway",
  		    "elementType": "labels.text.stroke",
  		    "stylers": [{
  		        "color": "#ff0000"
  		    }]
  		}, {
  		    "featureType": "road.arterial",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 18
  		    }]
  		}, {
  		    "featureType": "road.arterial",
  		    "elementType": "geometry.fill",
  		    "stylers": [{
  		        "color": "#575757"
  		    }]
  		}, {
  		    "featureType": "road.arterial",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#ffffff"
  		    }]
  		}, {
  		    "featureType": "road.arterial",
  		    "elementType": "labels.text.stroke",
  		    "stylers": [{
  		        "color": "#2c2c2c"
  		    }]
  		}, {
  		    "featureType": "road.local",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 16
  		    }]
  		}, {
  		    "featureType": "road.local",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#999999"
  		    }]
  		}, {
  		    "featureType": "transit",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 19
  		    }]
  		}, {
  		    "featureType": "water",
  		    "elementType": "geometry",
  		    "stylers": [{
  		        "color": "#000000"
  		    }, {
  		        "lightness": 17
  		    }]
  		}, {
  		    "featureType": "water",
  		    "elementType": "geometry.fill",
  		    "stylers": [{
  		        "color": "#111111"
  		    }]
  		}, {
  		    "featureType": "water",
  		    "elementType": "labels.text.fill",
  		    "stylers": [{
  		        "color": "#aeaeae"
  		    }]
  		}]

	});

	//create the marker for the firm location on the map.
	var firmMarker = new google.maps.Marker({
		position: { lat: 39.221512,  lng: -84.441454 },
		map: googleMap,
		title: "Seeskin Paas & Blackburn",
		animation: google.maps.Animation.DROP,
    icon: 'img/icon/redMarker2.png'
	});

	//create the info window that shows when clicking on the marker.
	var infowindow = new google.maps.InfoWindow({
    	content: "Seeskin Paas & Blackburn"
  	});

	firmMarker.addListener('click', function() {
	    infowindow.open(googleMap, firmMarker);
	});

}