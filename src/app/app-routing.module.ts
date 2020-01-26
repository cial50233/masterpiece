import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CreateAccountComponent} from './create-account/create-account.component';



export const appRoutes: Routes = [

  {

    path : '',

    component : HomeComponent

  },
  {

    path : 'create',

    component : CreateAccountComponent

  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }