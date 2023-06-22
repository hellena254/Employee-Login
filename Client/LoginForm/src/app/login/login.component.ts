import { Component } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private loginService: LoginService){}
   
  
  isLoggedIn: boolean = false;

  login(): void {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        // Handle successful login response
        console.log("Login successful:", response);
        this.isLoggedIn = true;
      },
      error => {
        // Handle login error
        console.error("Login error:", error);
      }
    );
  }
}
