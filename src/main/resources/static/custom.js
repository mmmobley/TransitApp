var map;

function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
		center: coords,
		zoom: 15,
		scrollwheel: false
	});
	
//	{ lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) }
//	var iconBase =
//            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
	
	for (i=0; i<busLocations.length; i++){
		var marker = new google.maps.Marker({
			position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
			map: map,
			icon: { url: "http://maps.google.com/mapfiles/ms/icons/bus.png" },
		});
		
//		var contentString = '<h2>' + bus + '</h2>';
        
//        var infowindow = new google.maps.InfoWindow({
//          content: contentString
 //       });

//        google.maps.event.addListener(marker, 'click', function() {
//           infowindow.open(map,marker);
 //       });
	}
	
	
	
	// var personLocation = {
	//			    lat: parseFloat(/*[[${location.lat}]]*/),
	//			    lng: parseFloat(/*[[${location.lng}]]*/)
	//				};
	
	
	
	var umarker = new google.maps.Marker({
		position: coords,
		map: map,
	});
}