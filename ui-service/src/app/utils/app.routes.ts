import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { UsersComponent } from '../components/users/users.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
