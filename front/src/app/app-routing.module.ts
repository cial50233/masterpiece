import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {paths} from './app-paths'
import { from } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';


export const appRoutes: Routes = [

  
  {
    path : '',
    pathMatch: 'full',
    redirectTo: paths.home
  },
  {

    path : paths.home,

    component : HomeComponent

  },
  {

    path : paths.create,

    component : CreateAccountComponent

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