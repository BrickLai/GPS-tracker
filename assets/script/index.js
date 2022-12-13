/* ----------------------------------------------

    Intro to Third-Party APIs
    Zhaoyu Li

-----------------------------------------------*/


'use strict';
function select (selector, parent = document) {
    return parent.querySelector(selector);
}

const overlay = select ('.overlay');
const loading = select ('.loading');
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpY2s5NzMiLCJhIjoiY2xiZ3J1czJ1MGVlMjNubzN3M2cxeDB0byJ9.Wk6nus9qpX7R3l9G8TXcnQ';

const map = new mapboxgl.Map({
    container: 'map',
    interactive: false,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    pitch: 40,
    zoom: 16
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker ({
    color: '#3898ff'
})

function getLocation(position) {
    const {longitude, latitude} = position.coords;

    if (longitude && latitude) {
        map.setCenter([longitude,latitude]);
        marker.setLngLat([longitude,latitude]).addTo(map);
        setTimeout(()=>{ overlay.classList.add('hidden')}, 750);
    }

}

function errorHandler(event) {
    loading.style.animationPlayState = 'paused';
    console.log(event.message);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

/*
    The watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes
*/

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(getLocation, errorHandler,options);
}else{
    console.log('Geolocation is not supported by your browser');
}



// mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpY2s5NzMiLCJhIjoiY2xiZ3J1czJ1MGVlMjNubzN3M2cxeDB0byJ9.Wk6nus9qpX7R3l9G8TXcnQ';
// const map = new mapboxgl.Map({
//      container: 'map', // container ID
//      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//      style: 'mapbox://styles/mapbox/streets-v12', // style URL
//      center: [-74.5, 40], // starting position [lng, lat]
//      zoom: 9 // starting zoom
// });