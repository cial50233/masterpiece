import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {paths} from './app-paths'
import { from } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { FindAroundComponent } from './find-around/find-around.component';
import { ViewAdComponent } from './view-ad/view-ad.component';
import { AdComponent } from './ad/ad.component';
import { ShowAdsComponent } from './show-ads/show-ads.component';
import { AboutComponent } from './about/about.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { RouteGuardService } from './services/route-guard.service';
import { AdminBoardComponent } from './admin-board/admin-board.component';

export const appRoutes: Routes = [

  
  {
    path : '',
    pathMatch: 'full',
    redirectTo: paths.home
  },
  {

    path : paths.about,

    component : AboutComponent

  },
  {

    path : paths.home,

    component : HomeComponent

  },
  {

    path : paths.find,

    component : FindAroundComponent

  },
  {

    path : paths.login,

    component : LoginComponent

  },
  {

    path : paths.ad,
    canActivate: [RouteGuardService],
    component : AdComponent

  },
  {

    path : paths.adminBoard,
    canActivate: [RouteGuardService],
    component : AdminBoardComponent

  },
  {

    path : paths.create,

    component : CreateAccountComponent

  },
  {

    path : paths.myAds,
    canActivate: [RouteGuardService],
    component : MyAdsComponent

  },
  {

    path : paths.showAds,

    component : ShowAdsComponent

  },
  {

    path : paths.viewAd,

    component : ViewAdComponent

  },
  {
    path: '**',
    
    redirectTo: 'notfound'
  },
  {
    path: paths.notfound,
    
    component: NotfoundComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }