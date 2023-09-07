import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-arc'; 


@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map:any;

  private initMap(): void {
    

   const map = L.map('map', {
    center: [ 23.0,78.0 ],
    zoom: 4
  });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  var points = [{
    "latitud": 23.526523590087891,
    "longitud": 15.6150951385498047
    }, {
    "latitud": 33.511680603027344,
    "longitud": 10.6671133041381836
    },
    {
    "latitud": 23.526451110839844,
    "longitud": 15.6140098571777344
    }]
    
    
    for (var j in points) {
      var latlng = L.latLng({ lat: points[j].latitud, lng: points[j].longitud });
  
      L.marker( latlng ).addTo(map).bindPopup("hello");
  }
   
  var markers = [
    {
      "id": 1,
      "icao": "VOYK",
      "name": "Yelahanka AFS",
      "lat":13.135833,
      "lng":77.6075
    },
    {
      "id": 2,
        "icao": "VOTX",
        "name": "Tambaram AFS",
        "lat":12.9010840,
        "lng":80.1304055
    },
 
    {
      "id": 3,
        "icao": "VIBK",
        "name": "Bikaner Nal Airbase",
        "lat":28.070556,
        "lng":73.206944
    }
 ];

   for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng] )
     // .bindPopup( '<a href="' + markers[i].icao + '" target="_blank" rel="noopener">' + markers[i].name + '</a>' )
     .bindPopup("<b>Name :</b> " + markers[i].name + "<br/><b>icao :</b> " + markers[i].icao + "<br /><b>Location :</b> " + markers[i].lat + "," + markers[i].lng )
      .addTo( map );
}

     
    /* map.whenReady(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 800);
    });
 */
   
  
  /*  new L.Circle([21.508, 18.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map).bindPopup("I am a circle."); */

 /* new L.Polyline.Arc([59.56667, 150.80000], [67.50000, 64.03333], {
              color: 'red',
              vertices: 200
          }).addTo(map);  */

   /* new L.Polygon([
      [17.88084,74.33693],
      [22.86716,73.89044],
      [15.70384,73.73715],
      [20.66049,73.82521],
      [18.64809,74.14605]
      ]).addTo(map).addTo(map).bindPopup("I am a polygon."); */
      var popup = L.popup();
         const onMapClick = (e: { latlng: L.LatLngExpression; }) => {
      popup
       .setLatLng(e.latlng)
       .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
      }
      map.on('click', onMapClick);
    tiles.addTo(map);
    
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}