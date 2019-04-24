mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';


var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.814049, 40.729503],
  zoom: 13,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('311 rodent complaints in 2019 in zipcode 11367');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.814049,40.729503])
  .setPopup(popup)
  .addTo(map);

// pk.eyJ1IjoibmF0LWdvbWV6IiwiYSI6ImNqdW4yYjI0ZzJvNzgzeW8ya2JmaGF3NmwifQ.qz1eZvz1hW0k6kOqtnFpTg

servicerequestdata.forEach(function(rodentData) {

  var thisRequestColor = 'steelblue';
  if (rodentData.descriptor=== 'mouse sighting') thisRequestColor = 'orange';
  if (rodentData.nyuprogram === 'signs of rodents') thisRequestColor = 'purple';
  if (rodentData.nyuprogram === 'conditions attracting rodents') thisRequestColor = 'green';
  if (rodentData.nyuprogram === 'rat sighting') thisRequestColor = 'yellow';

  new mapboxgl.Marker({
    color: thisRequestColor,
  })
    .setLngLat([rodentData.lng, rodentData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${rodentData.agencyname} recieved a ${rodentData.complainttype} complaint in ${rodentData.year}. Anonymous tipper said "${rodentData.descriptor}" `))
    .addTo(map);
})
