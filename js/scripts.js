var marker = new mapboxgl.Marker()
  .setLngLat([-73.958588, 40.555026])
  .addTo(map);

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 })
.setText('Construction on the Washington Monument began in 1848.');

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
.setLngLat(monument)
.setPopup(popup) // sets a popup on this marker
.addTo(map);
