import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Find Around';
  constructor(private translate: TranslateService,private authenticationService: AuthenticationService) { }

  setLang(language: string) {
    this.translate.use(language);
  }


  isLogged() {
    return this.authenticationService.isLogged();
  }

  logout() {
    this.authenticationService.logout();
  }
}
