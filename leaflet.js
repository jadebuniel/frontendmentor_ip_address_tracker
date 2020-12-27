const map = L.map('mapid')
let theMarker;

export const leaflet = (res) => {

    var mymap = map.setView([res.location.lat, res.location.lng], 18);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFkZWJ1bmllbCIsImEiOiJja2o2MnFtcGMzZGl2MnFyd2hsdHF1aG11In0.8MpOhs9uktKFAxNZu-yzIw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    id: 'mapbox/streets-v8',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    theMarker = L.marker([res.location.lat, res.location.lng]).addTo(mymap);

}

export const leafletChange = (res) => {
    var mymap = map.panTo(new L.LatLng(res.location.lat, res.location.lng))
    if (theMarker != undefined){
        map.removeLayer(theMarker)
    }
    theMarker = L.marker([res.location.lat, res.location.lng]).addTo(mymap);
}