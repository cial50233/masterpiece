import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
      providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
      private REST_API_SERVER = "http://localhost:8081/api/announcements";
=======
      private REST_API_SERVER = "http://localhost:8081/announcements";
>>>>>>> dev

      constructor(private httpClient: HttpClient) { }

      public sendGetRequest() {
            return this.httpClient.get(this.REST_API_SERVER);
      }
}