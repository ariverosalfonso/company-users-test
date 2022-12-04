import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { UserComponent } from './user/user.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { AuthService } from '../auth/services/auth.service';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    QRCodeModule
  ],
  providers: [
    AuthService
  ]
})
export class RolesModule { }
