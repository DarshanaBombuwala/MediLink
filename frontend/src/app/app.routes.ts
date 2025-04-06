import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';  // Import your LoginComponent

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route for login page
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route to login
];
