import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as shapefile from 'shapefile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('container') private container: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const map = new google.maps.Map(this.container.nativeElement, {
      zoom: 10,
      center: {lat: 34.7, lng: 134},
    });

    shapefile.open('assets/N03-15_33_150101.shp', null, {encoding: 'sjis', highWaterMark: 0}).then((source) => {
      return source.read();
    }).then((results) => {
      // GeoJSONをLatLngLiteralの配列に変換
      return results.value.geometry.coordinates[0].map((coords) => {
        return {lat: coords[1], lng: coords[0]};
      });
    }).then((path: google.maps.LatLngLiteral[]) => {
      new google.maps.Polyline({
        map: map,
        path: path,
      });
    });
  }
}
