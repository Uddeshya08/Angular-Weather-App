import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
@Injectable()

export class AppComponent implements OnInit {
  title = 'weather-app';

  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }
  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }

  constructor(
    // Angular Modules 
    private http: HttpClient
  ) { }
  countryData: any;
  ngOnInit(): void {
    debugger;
    this.getCountries().subscribe((data) => {
      this.countryData = data;
      console.log('this.countryData=>', this.countryData);
    });
  }

  getCountries() {
    debugger;
    return this.http.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
  }
}

// @Injectable()
// export class ApiHttpService {
//   constructor(
//     // Angular Modules
//     private http: HttpClient
//   ) { }

//   public get(url: string, options?: any) {
//     return this.http.get(url, options);
//   }
//   public post(url: string, data: any, options?: any) {
//     return this.http.post(url, data, options);
//   }
//   public put(url: string, data: any, options?: any) {
//     return this.http.put(url, data, options);
//   }
//   public delete(url: string, options?: any) {
//     return this.http.delete(url, options);
//   }

//   countryData: any;


//   ngOnInit() {
//     const that = this;
//     debugger;
//     this.getCountries().subscribe((data) => {
//       this.countryData = data;
//       console.log('this.countryData=>', this.countryData);
//     });
//   }

//   getCountries() {
//     debugger;
//     return this.http.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
//   }


// }
