import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UserComponent } from '../roles/user/user.component';
import { HeaderModule } from 'src/app/shared/header/header.module';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class HomeModule { }
