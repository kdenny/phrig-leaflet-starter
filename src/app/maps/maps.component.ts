import { Component, OnInit } from '@angular/core';

import 'leaflet';


@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  map;
  baseMaps;

  constructor() {

  }

  ngOnInit() {
    this.baseMaps = {
            CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            })
        };
        this.map = L.map("map");
        this.baseMaps.CartoDB.addTo(this.map);
        this.map.setView([51.505, -0.09], 13);

  }

}
