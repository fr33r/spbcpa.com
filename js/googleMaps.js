function initializeMap(){
	var googleMap = new google.maps.Map(document.getElementById('map'), {
  		center: {
  			lat: 39.221512, 
  			lng: -84.441454
  		},
  		zoom: 17,
  		mapTypeControl: false,
  		zoomControl: false,
  		streetViewControl: false,
  		styles: [
	  		{
	  			featureType: 'landscape',
	  			elementType: 'all',
	  			stylers: [
	  				{ color: '#333333' },
	  			]
	  		},
	  		{
	  			featureType: 'road',
	  			elementType: 'geometry.stroke',
	  			stylers: [
	  				{ color: '#999999' },
	  			]
  			},
  			{
	  			featureType: 'road',
	  			elementType: 'geometry.fill',
	  			stylers: [
	  				{ color: '#666666' },
	  			]
  			},
  			{
	  			featureType: 'road',
	  			elementType: 'labels.text.stroke',
	  			stylers: [
	  				{ color: '#FFFFFF' },
	  			]
  			},
  			{
	  			featureType: 'poi',
	  			elementType: 'geometry.fill',
	  			stylers: [
	  				{ color: '#888888' },
	  			]
  			},
  			{
	  			featureType: 'poi',
	  			elementType: 'geometry.stroke',
	  			stylers: [
	  				{ color: '#AAAAAA' },
	  			]
  			},
  			{
	  			featureType: 'water',
	  			elementType: 'geometry',
	  			stylers: [
	  				{ color: '#222222' },
	  			]
  			}

  		]
	});

	var firmMarker = new google.maps.Marker({
		position: { lat: 39.221512,  lng: -84.441454 },
		map: googleMap,
		title: "Seeskin Paas & Blackburn",
		animation: google.maps.Animation.DROP
	})
}