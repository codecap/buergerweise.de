// Google map.
function initMap() {
  // The location of Buergerwiese
  const bw = { lat: 50.084265, lng: 8.661599 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: bw,
  });
  // The marker, positioned at Buergerwiese
  const iconFolder = "assets/img/";
  const marker = new google.maps.Marker({
    position: bw,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: `${iconFolder}location.svg`,
    },
  });
}
// #Google map.
