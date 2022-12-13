# GPS-tracker

<h3>Technologies</h3>
<li>HTML5</li>
<li>CSS3</li>
<li>Git</li>

<h3>key Code</h3>

```
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    });
    // Add the control to the map.
    map.addControl(geolocate);
    // Set an event listener that fires
    // when a geolocate event occurs.
    geolocate.on('geolocate', () => {
    console.log('A geolocate event has occurred.');
    });
```

<h3>Launch</h3>
<a href="https://bricklai.github.io/website-APIs/">Click here</a> to visit.

