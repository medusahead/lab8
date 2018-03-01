function initMap() {
  var ucsd_ltlng = {lat:32.878799, lng:-117.235816};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: ucsd_ltlng,
    zoom:18
  });

  var marker = new google.maps.Marker({
    position: ucsd_ltlng,
    map: map,
    title: "UCSD"
  });
}
