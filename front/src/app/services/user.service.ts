import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject<any[]>();

  private user = [

    {

      id:'',
      email: 'bbbb@bb.bb',
      password: 'htyFTYaea'
    
    }

  /*  {

      "id":"",
      "email": "wwwww@rez.re",
      "password": "azeazze::45aazaea"
    
    }*/
  ]

  constructor(private httpClient: HttpClient) { }

  saveUserToServer() {
    this.httpClient
      .post('http://localhost:8081/user/create/', this.user)
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
