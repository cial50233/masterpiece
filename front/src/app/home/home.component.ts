import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';//map
import { MapsAPILoader, MouseEvent } from '@agm/core';  //map

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //map
  latitude: number;
  longitude: number;
  zoom: number;

  constructor() {   
  }

  ngOnInit(): void {
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

}
