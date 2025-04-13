import { Routes } from '@angular/router';
import { LoginPageComponent} from './pages/login-page/login-page.component';  // Import your LoginComponent

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent }, // Route for login page
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route to login
];
