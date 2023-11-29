(function($) {
    "use strict";
     $(document).on('ready', function() {
        var map = new GMaps({
            el: '#map',
            lat: 23.011245,
            lng: 90.884780,
            scrollwheel: false,
        });
        map.addMarker({
            lat: 23.011245,
            lng: 90.884780,
            title: 'Marker with InfoWindow',
            infoWindow: {
            content: '<p>welcome to Medipro</p>'
        }
    
    });
     })});