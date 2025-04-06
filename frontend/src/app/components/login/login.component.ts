import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  // Handle form submission
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const { username, password } = form.value;
      console.log('Username:', username, 'Password:', password);
      // Add authentication logic here
    }
  }
}
