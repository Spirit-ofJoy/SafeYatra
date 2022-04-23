import React, { useEffect, useRef } from "react";
import "./style.css";
// import Navbar from "../components/Navbar/Navbar";

// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';


// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


function DisplayMap() {

    // mapboxgl.workerClass = MapboxWorker;
    var mapboxgl = require('mapbox-gl');
    var polyline = require('@mapbox/polyline');
    var turf = require('@turf/turf');
    const mapContainer = useRef(null);
    const map = useRef(null);
    mapboxgl.accessToken = 'pk.eyJ1IjoiemFwMTAwMSIsImEiOiJjbDJhbzR4cngwM2JyM2NwN25sdW80NWNsIn0.ekbhe_aKhQLUL-nmF-6vTA';
    // let map = new mapboxgl.Map({
    //     container: 'map', // Specify the container ID
    //     style: 'mapbox://styles/mapbox/light-v10', // Specify which map style to use
    //     center: [81.83402, 25.43807], // Specify the starting position [lng, lat]
    //     zoom: 13 // Specify the starting zoom
    // });

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [81.83402, 25.43807],
            zoom: 13
        });
    });

    // var MapboxDirections = require('@mapbox/mapbox-gl-directions');


    // let directions = new MapboxDirections({
    //     accessToken: mapboxgl.accessToken,
    //     unit: 'metric',
    //     profile: 'mapbox/driving',
    //     alternatives: true,
    //     geometries: 'geojson',
    //     controls: { instructions: true },
    //     flyTo: false,

    // });

    // // let geocoder = new MapboxGeocoder({
    // //   accessToken: mapboxgl.accessToken,
    // //   marker: {
    // //     color: 'orange'
    // //   },
    // //   mapboxgl: mapboxgl
    // // });

    // // map.addControl(geocoder);

    // map.addControl(directions, 'top-right');



    // map.scrollZoom.enable();

    // let negatives = {
    //     'type': 'FeatureCollection',
    //     'features': [
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84415, 25.43992]
    //             },
    //             'properties': {
    //                 'clearance': "1' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85671, 25.44877]
    //             },
    //             'properties': {
    //                 'clearance': "13' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85601, 25.44836]
    //             },
    //             'properties': {
    //                 'clearance': "10' 7"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.82985, 25.43862]
    //             },
    //             'properties': {
    //                 'clearance': "8' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.83001, 25.43284]
    //             },
    //             'properties': {
    //                 'clearance': "6' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.83454, 25.42568]
    //             },
    //             'properties': {
    //                 'clearance': "9' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85373, 25.44869]
    //             },
    //             'properties': {
    //                 'clearance': "5' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85335, 25.44816]
    //             },
    //             'properties': {
    //                 'clearance': "15' 2"
    //             }
    //         }
    //     ]
    // };


    // let positives = {
    //     'type': 'FeatureCollection',
    //     'features': [
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84654, 25.43607]
    //             },
    //             'properties': {
    //                 'clearance': "19' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84621, 25.43434]
    //             },
    //             'properties': {
    //                 'clearance': "2' 3"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84444, 25.43625]
    //             },
    //             'properties': {
    //                 'clearance': "8' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84513, 25.43748]
    //             },
    //             'properties': {
    //                 'clearance': "8' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84325, 25.43752]
    //             },
    //             'properties': {
    //                 'clearance': "8' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.8497, 25.43737]
    //             },
    //             'properties': {
    //                 'clearance': "8' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84666, 25.42966]
    //             },
    //             'properties': {
    //                 'clearance': "8' 2"
    //             }
    //         },
    //     ]
    // };


    // let positive2 = {
    //     'type': 'FeatureCollection',
    //     'features': [
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84068, 25.43985]
    //             },
    //             'properties': {
    //                 'clearance': "12' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.83858, 25.43689]
    //             },
    //             'properties': {
    //                 'clearance': "20' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.8383, 25.43821]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85404, 25.42952]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.84027, 25.42694]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85783, 25.43413]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.83517, 25.44048]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85112, 25.44636]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.83369, 25.43182]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //         {
    //             'type': 'Feature',
    //             'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': [81.85353, 25.44626]
    //             },
    //             'properties': {
    //                 'clearance': "2' 2"
    //             }
    //         },
    //     ]
    // };

    // let obstacle = turf.buffer(negatives, 0.10, { units: 'kilometers' });
    // let obstacle2 = turf.buffer(positives, 0.05, { units: 'kilometers' });
    // let obstacle3 = turf.buffer(positive2, 0.10, { units: 'kilometers' });
    // console.log(obstacle);

    // let bbox = [0, 0, 0, 0];
    // let polygon = turf.bboxPolygon(bbox);

    // map.on('load', () => {
    //     map.addLayer({
    //         id: 'negatives',
    //         type: 'fill',
    //         source: {
    //             type: 'geojson',
    //             data: obstacle
    //         },
    //         layout: {},
    //         paint: {
    //             'fill-color': '#f03b20',
    //             'fill-opacity': 0.5,
    //             'fill-outline-color': '#f03b20'
    //         }
    //     });

    //     map.addLayer({
    //         id: 'positives',
    //         type: 'fill',
    //         source: {
    //             type: 'geojson',
    //             data: obstacle2
    //         },
    //         layout: {},
    //         paint: {
    //             'fill-color': '#00ff00',
    //             'fill-opacity': 0.5,
    //             'fill-outline-color': '#00ff00'
    //         }
    //     });


    //     map.addLayer({
    //         id: 'positive2',
    //         type: 'fill',
    //         source: {
    //             type: 'geojson',
    //             data: obstacle3
    //         },
    //         layout: {},
    //         paint: {
    //             'fill-color': '#00ff25',
    //             'fill-opacity': 0.85,
    //             'fill-outline-color': '#00ff25'
    //         }
    //     });

    //     map.addSource('theRoute', {
    //         type: 'geojson',
    //         data: {
    //             type: 'Feature'
    //         }
    //     });



    //     map.addLayer({
    //         id: 'theRoute',
    //         type: 'line',
    //         source: 'theRoute',
    //         layout: {
    //             'line-join': 'round',
    //             'line-cap': 'round'
    //         },
    //         paint: {
    //             'line-color': '#cccccc',
    //             'line-opacity': 0.5,
    //             'line-width': 13,
    //             'line-blur': 0.5
    //         }
    //     });

    //     // Source and layer for the bounding box
    //     map.addSource('theBox', {
    //         type: 'geojson',
    //         data: {
    //             type: 'Feature'
    //         }
    //     });
    //     map.addLayer({
    //         id: 'theBox',
    //         type: 'fill',
    //         source: 'theBox',
    //         layout: {},
    //         paint: {
    //             'fill-color': '#FFC300',
    //             'fill-opacity': 0.5,
    //             'fill-outline-color': '#FFC300'
    //         }
    //     });
    // });

    // let counter = 0;
    // let maxAttempts = 20;
    // let emoji = '';
    // let collision = '';
    // let detail = '';
    // let reports = document.getElementById('reports');

    // function addCard(id, element, clear, detail) {
    //     let card = document.createElement('div');
    //     card.className = 'card';
    //     // Add the response to the individual report created above
    //     let heading = document.createElement('div');
    //     // Set the class type based on clear value
    //     heading.className =
    //         clear === true
    //             ? 'card-header route-found'
    //             : 'card-header obstacle-found';
    //     heading.innerHTML =
    //         id === 0
    //             ? `${emoji} The route ${collision}`
    //             : `${emoji} Route ${id} ${collision}`;

    //     let details = document.createElement('div');
    //     details.className = 'card-details';
    //     details.innerHTML = `This ${detail} obstacles.`;

    //     card.appendChild(heading);
    //     card.appendChild(details);
    //     element.insertBefore(card, element.firstChild);
    // }

    // function noRoutes(element) {
    //     let card = document.createElement('div');
    //     card.className = 'card';
    //     // Add the response to the individual report created above
    //     let heading = document.createElement('div');
    //     heading.className = 'card-header no-route';
    //     emoji = '🛑';
    //     heading.innerHTML = `${emoji} Ending search.`;

    //     // Add details to the individual report
    //     let details = document.createElement('div');
    //     details.className = 'card-details';
    //     details.innerHTML = `No clear route found in ${counter} tries.`;

    //     card.appendChild(heading);
    //     card.appendChild(details);
    //     element.insertBefore(card, element.firstChild);
    // }

    // directions.on('clear', () => {
    //     map.setLayoutProperty('theRoute', 'visibility', 'none');
    //     map.setLayoutProperty('theBox', 'visibility', 'none');

    //     // counter = 0;
    //     reports.innerHTML = '';
    // });

    // let durationcheck = 10000000000;
    // let storelocation;
    // let weightedvalorg = -1;
    // let weightedval = 0;
    // let x;

    // directions.on('route', (event) => {
    //     // Hide the route and box by setting the opacity to zero
    //     map.setLayoutProperty('theRoute', 'visibility', 'none');
    //     map.setLayoutProperty('theBox', 'visibility', 'none');

    //     let numcnt = 0;
    //     if (counter >= maxAttempts) {
    //         noRoutes(reports);
    //     } else {
    //         // Make each route visible
    //         console.log('event routing', event.route)
    //         for (let route of event.route) {
    //             console.log('routing', route)
    //             // Make each route visible
    //             map.setLayoutProperty('theRoute', 'visibility', 'visible');
    //             map.setLayoutProperty('theBox', 'visibility', 'visible');

    //             // Get GeoJSON LineString feature of route
    //             let routeLine = polyline.toGeoJSON(route.geometry);

    //             // Create a bounding box around this route
    //             // The app will find a random point in the new bbox
    //             bbox = turf.bbox(routeLine);
    //             polygon = turf.bboxPolygon(bbox);

    //             // Update the data for the route
    //             // This will update the route line on the map
    //             map.getSource('theRoute').setData(routeLine);
    //             // console.log(map.getSource('theRoute').setData(routeLine))
    //             // Update the box
    //             map.getSource('theBox').setData(polygon);

    //             let clear = turf.booleanDisjoint(obstacle, routeLine);
    //             let safe = turf.booleanIntersects(obstacle2, routeLine);
    //             let safer = turf.booleanIntersects(obstacle3, routeLine);

    //             // weightedval = (safe ? 2 : 0) + (safer ? 5 : 0);
    //             console.log(clear)
    //             console.log(safe)
    //             console.log(safer)
    //             console.log(weightedval)

    //             if (clear === true) {
    //                 collision = 'does not intersect any obstacles!';
    //                 detail = `takes ${(route.duration / 60).toFixed(
    //                     0
    //                 )} minutes and avoids`;
    //                 emoji = '✔️';
    //                 x = route.duration;
    //                 if (x < durationcheck) {
    //                     durationcheck = route.duration;
    //                     storelocation = map.getSource('theRoute').setData(routeLine);

    //                 }
    //                 map.setPaintProperty('theRoute', 'line-color', '#74c476');
    //                 // Hide the box+
    //                 map.setLayoutProperty('theBox', 'visibility', 'none');
    //                 // Reset the counter
    //                 counter = counter - 1;
    //                 weightedvalorg = weightedval
    //                 console.log(weightedvalorg);
    //                 numcnt++;
    //                 addCard(counter, reports, clear, detail);
    //                 if (numcnt > 5) {
    //                     break;
    //                 }
    //             } else {
    //                 // Collision occurred, so increment the counter
    //                 counter = counter - 1;
    //                 // As the attempts increase, expand the search area
    //                 // by a factor of the attempt count
    //                 polygon = turf.transformScale(polygon, counter * 0.01);
    //                 bbox = turf.bbox(polygon);
    //                 collision = 'is bad.';
    //                 detail = `takes ${(route.duration / 60).toFixed(
    //                     0
    //                 )} minutes and hits`;
    //                 emoji = '⚠️';
    //                 map.setPaintProperty('theRoute', 'line-color', '#de2d26');

    //                 // Add a randomly selected waypoint to get a new route from the Directions API
    //                 let randomWaypoint = turf.randomPoint(1, { bbox: bbox });
    //                 directions.setWaypoint(
    //                     0,
    //                     randomWaypoint['features'][0].geometry.coordinates
    //                 );
    //                 numcnt++;
    //                 addCard(counter, reports, clear, detail);
    //             }
    //             console.log(durationcheck);
    //             console.log(storelocation);

    //             // durationcheck.sort((c1, c2) => {
    //             //   return compareObjects(c1, c2, 'name')
    //             // })
    //             // Add a new report section to the sidebar
    //             addCard(counter, reports, clear, detail);
    //         }
    //     }
    //     // storelocation;
    // });

    return (
        <>
            {/* <div id="map"></div> */}
            <div>
                <div ref={mapContainer} className="map-container" />
            </div>
            {/* <div class="sidebar">
                <h1>Reports</h1>
                <div id="reports"></div>
            </div> */}
        </>
    );
}

export default DisplayMap;
