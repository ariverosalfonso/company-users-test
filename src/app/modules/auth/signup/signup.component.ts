import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertCssClass } from 'src/app/shared/complements/enums/alert.enum';
import { UiService } from 'src/app/shared/services/ui.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]],
    password2: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]]
  })

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private uiService: UiService,
    private router: Router

  ) { }

  ngOnInit() {
  }


  async registerUser() {

    if (!this.registerForm.valid || this.registerForm.value.password !== this.registerForm.value.password2) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const response = await this.authService.register(this.registerForm.value.email, this.registerForm.value.password)
    if (response) {
      try {
        this.uiService.presentAlert({ header: 'Verificar email', message: 'Hemos enviado un correo de confirmación por favor revisalo e ingresa a la aplicación.', buttons: ['Entendido'], cssClass: AlertCssClass.success, })
        this.registerForm = this.fb.group({
          email: [null, [Validators.required, Validators.email]],
          password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]],
          password2: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(200)]]
        });
        this.router.navigate(['/'])
        const path = 'Users';
        const id = response.user.uid;
      } catch (error) {
        this.uiService.presentAlert({ header: 'Ocurrió un error', message: 'Ocurrió un error al crear su cuenta hable con el administrador.', buttons: ['Entendido'], cssClass: AlertCssClass.danger })

      }
    } else {
      this.authService.logout();
    }
  }

}
