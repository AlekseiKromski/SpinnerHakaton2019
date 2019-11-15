	/*!
 	* GM Google Maps
 	* version: 1.1 (10 April, 2016)
 	* require: jQuery v1.12+
 	*/


        function initMap() {
          

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var coordinates = {lat: 51.509964, lng: -0.303052}; // CHANGE COORDINATES HERE // // CHANGE COORDINATES HERE //        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
          scrollwheel: false,
          draggable: true,
          center: coordinates
        });

        var marker = new google.maps.Marker({
          position: coordinates,
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
               content:"We Are Here"
            });
        
        var marker = new google.maps.Marker({
          position: coordinates,
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
               content:"We Are Here"
            });
        
            infowindow.open(map,marker);

      }


