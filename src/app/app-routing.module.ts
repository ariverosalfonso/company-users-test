import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToUnauthorized = () => redirectUnauthorizedTo(['']);
const redirectLogged = () => redirectLoggedInTo(['home'])

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/login/login.module').then(
        (m) => m.LoginModule
      ),
    ...canActivate(redirectLogged)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/auth/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (m) => m.HomeModule
      ),
    ...canActivate(redirectToUnauthorized)
  },
  {
    path: 'code',
    loadChildren: () =>
      import('./modules/roles/roles.module').then(
        (m) => m.RolesModule
      ),
    ...canActivate(redirectToUnauthorized)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
