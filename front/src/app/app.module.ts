import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataService } from '../app/services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from '../app/map/map.component';
import { CarouselComponent } from '../app/carousel/carousel.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchComponent } from './search/search.component';
import { MiniAdsComponent } from './mini-ads/mini-ads.component';
import { FindAroundComponent } from './find-around/find-around.component';
import { AdComponent } from './ad/ad.component';
import { ViewAdComponent } from './view-ad/view-ad.component';
import { TransfereService } from './services/transfere.service';
import { ShowAdsComponent } from './show-ads/show-ads.component';
import { AboutComponent } from './about/about.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { RouteGuardService } from '../app/services/route-guard.service';
import { AdminBoardComponent } from './admin-board/admin-board.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    HomeComponent,
    NavbarComponent,
    ControlMessagesComponent,
    NotfoundComponent,
    LoginComponent,
    SearchbarComponent,
    MapComponent,
    CarouselComponent,
    SearchComponent,
    MiniAdsComponent,
    FindAroundComponent,
    AdComponent,
    ViewAdComponent,
    ShowAdsComponent,
    AboutComponent,
    MyAdsComponent,
    AdminBoardComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    Ng2SearchPipeModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCQYtMN7-J4MCFHbEGakwNbkLYl7GVn60',
      libraries: ['places']
    })
  ],
  providers: [DataService, TransfereService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }