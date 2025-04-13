import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [BrowserModule, FormsModule], // <-- Add FormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
