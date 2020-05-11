import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls, OverviewMap, ScaleLine, FullScreen } from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { transform } from 'ol/proj';

import VectorLayer from 'ol/layer/Vector';
import Icon from 'ol/style/Icon';
import * as olProj from 'ol/proj';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 public map;
  view = new View({
    center: olProj.fromLonLat([2.5838853999999998, 48.84416820000001]),
    zoom: 15,
    minZoom: 3,
    maxZoom: 19,
  });

  //map

  lat: number;
  lon: number;
  address: string;
  private geoCoder;



  constructor() { }

  ngOnInit(): void {
    this.initializeMap();


    setTimeout(() => {
      this.setCurrentLocation();
    }, 500);

    //this.setCurrentLocation2()
  }

  initializeMap() {
    var source = new OSM();
    var overviewMapControl = new OverviewMap({
      layers: [
        new TileLayer({
          source: source
        })
      ]
    });

    this.map = new Map({
      controls: defaultControls().extend([
        overviewMapControl,
        new ScaleLine(),
        new FullScreen()
      ]),
      layers: [
        new TileLayer({
          source: source
        })
      ],
      target: 'carte',
      view: this.view
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation2() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    }
  }

  private setCurrentLocation() {
    // Objet géographique de la position de géolocalisation
    var ObjPosition = new Feature();
    // Attribution d'un style à l'objet
    ObjPosition.setStyle(new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    }));
    var geolocation = new Geolocation({
      tracking: true,
      projection: this.view.getProjection()
    });
    // On scrute les changements des propriétés
    geolocation.on('change', function (evt) {
      var precision = geolocation.getAccuracy();

      var position = geolocation.getPosition();
      // On transforme la projection des coordonnées
      var newPosition = transform(position, 'EPSG:3857', 'EPSG:4326');
      this.lat = newPosition[1];
      this.lon = newPosition[0];
      // Attribution de la géométrie de ObjPosition avec les coordonnées de la position
      ObjPosition.setGeometry(position ? new Point(position) : null);
    });
    // On alerte si une erreur est trouvée
    geolocation.on('error', function (erreur) {
      alert('Echec de la géolocalisation : ' + erreur.message);
    });
    // Source du vecteur contenant l'objet géographique
    var sourceVecteur = new Vector({
      features: [ObjPosition]
    });
    // Couche vectorielle 
    var vecteur = new VectorLayer({
      map: this.map,
      source: sourceVecteur
    });
    // Zoom sur l'emprise du vecteur
    sourceVecteur.once('change', function (evt) {
      // On vérifie que la source du vecteur sont chargés
      if (sourceVecteur.getState() === 'ready') {
        // On vérifie que le veteur contient au moins un objet géographique
        if (sourceVecteur.getFeatures().length > 0) {
          // On adapte la vue de la carte à l'emprise du vecteur
          this.map.getView().fit(sourceVecteur.getExtent(), this.map.getSize());
        }
      }
    });
  }

}
