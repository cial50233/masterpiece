import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject<any[]>();

  private user = [

    {

      id:'',
      username: 'azerty',
      email: 'bbbb@bb.bb',
      password: 'htyFTYaea'
    
    }

  ]

  constructor(private httpClient: HttpClient) { }

  saveUserToServer() {
    let headers = new HttpHeaders()
    .set("access-control-allow-origin", "http://localhost:8081")
    .set("Access-Control-Request-Method", "GET,HEAD,PUT,PATCH,POST,DELETE")
    .set("Content-Type", "application/json");

    this.httpClient
      .post('http://localhost:8081/user/create/', JSON.stringify(this.user),  { headers })
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }

}
