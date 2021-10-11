// Google map.
function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.084265, lng: 8.661599 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const iconFolder = "assets/img/";
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: `${iconFolder}location.svg`,
  });
}
// #Google map.
