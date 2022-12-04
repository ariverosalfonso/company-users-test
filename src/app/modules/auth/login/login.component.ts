import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertCssClass } from 'src/app/shared/complements/enums/alert.enum';
import { UiService } from 'src/app/shared/services/ui.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)],],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private uiService: UiService

  ) { }

  ngOnInit() { }

  async login() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const user = await this.authService.login(this.loginForm.value.email, this.loginForm.value.password)

    try {
      if (user) {
        this.router.navigateByUrl('home');
      }
    } catch (error) {
      this.uiService.presentAlert({
        header: 'Ocurrió un error',
        message:
          'No se ha podido ingresar en la aplicación, por favor verifica tu conexión a internet y tus credenciales.',
        cssClass: AlertCssClass.danger,
        buttons: ['Entendido'],
      });
    }


    /*
   this.authService
     .login(this.loginForm.value.email, this.loginForm.value.password)
     .then((resp) => {
       this.router.navigateByUrl('person-form');
     })
     .catch((err) => {
       this.uiService.presentAlert({
         header: 'Ocurrió un error',
         message:
           'No se ha podido ingresar en la aplicación, por favor verifica tu conexión a internet y tus credenciales.',
         cssClass: AlertCssClass.danger,
         buttons: ['Entendido'],
       });
     });
 } loginForm: FormGroup = this.fb.group({
   email: [null, [Validators.required, Validators.email]],
   password: [
     null,
     [Validators.required, Validators.minLength(6), Validators.maxLength(200)],
   ],
 });

 */
  }

}
