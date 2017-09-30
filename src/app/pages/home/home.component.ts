import { Component, OnInit } from '@angular/core';

import 'leaflet';

import {ApiService} from '../../services/api.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  map;
  baseMaps;
  geojsonLayer;


  constructor(public api: ApiService) {

  }

  ngOnInit() {

    this.baseMaps = {
        CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        })
    };

    this.map = L.map("map");
    this.baseMaps.CartoDB.addTo(this.map);
    this.map.setView([40.28, -76.89], 8);

    this.api.getData().then(data => {
      this.geojsonLayer = L.geoJson(data).addTo(this.map);
      this.map.fitBounds(this.geojsonLayer.getBounds());
    })

  }

}
