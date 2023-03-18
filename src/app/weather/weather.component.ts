import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data:any;

  ngOnInit(): void {

    this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=13.08&lon=80.27&appid=82a52b372b88547fc0d73025a7559547").subscribe((res) => {
      console.log(res)
      this.data=res
      this.data.main.temp=(this.data.main.temp-273.15).toFixed(2)
      this.data.main.temp_max=(this.data.main.temp_max-273.15).toFixed(2)
      this.data.main.temp_min=(this.data.main.temp_min-273.15).toFixed(2)

   })

  }

  // getLocation():Promise<any>{
  //   return new Promise((resolve,reject))=>{
  //     navigator.geolocation.getCurrentPosition(res=>{
  //       resolve({lng: Response.coords.longitude, lat: resp.coords.latitude})
  //     })}}

}
