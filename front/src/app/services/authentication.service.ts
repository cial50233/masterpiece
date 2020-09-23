import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Config } from 'src/assets/config-properties';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private router : Router, private readonly http: HttpClient) { }

  logIn(formData: FormGroup) {
    let datas = new URLSearchParams();
    datas.set("username", formData.value.username);
    datas.set("password", formData.value.password);
    datas.set("client_id", formData.value.client_id);
    datas.set("grant_type", formData.value.grant_type);
    return this.http.post<any>(Config.baseUrl + "/oauth/token", datas.toString(), Config.httpOptions.formUrlEncoded)
      .pipe(map((token: Token) => {
        window.localStorage.setItem('token', JSON.stringify(token));
      })
      );
  }

  isLogged(): boolean {
    if(localStorage.getItem("token")||sessionStorage.getItem("accessToken")){
      return true;
    }
    return false;
  }


  logout(): void {
    localStorage.removeItem("token");
    sessionStorage.removeItem("accessToken");
    this.router.navigate(['/home']);
  }
}
