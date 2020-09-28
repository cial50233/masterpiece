import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
      providedIn: 'root'
})
export class DataService {
      private REST_API_SERVER = "http://localhost:8081/api/announcements";
      //private REST_API_SERVER = "assets/announcements.json";
      constructor(private httpClient: HttpClient) { }

      public sendGetRequest() {
           /* const httpOptions = {
                  headers : new HttpHeaders()
                    .set("Authorization", "Bearer "+ sessionStorage.getItem("accessToken"))
                    .set("Content-Type", "application/json")
                  };
            */
            return this.httpClient.get(this.REST_API_SERVER);
      }
}