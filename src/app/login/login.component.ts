import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {LoginDto} from "../Dtos/loginDto";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService : AuthService) {
  }
  email : string ='';
  password : string ='';
  onSubmit(){
    const loginDto : LoginDto={email_Vendeur : this.email,password : this.password};
    this.authService.login(loginDto).subscribe(
      response => {
        // Handle successful response
        const token = response.token;
        // Store the token in localStorage
        localStorage.setItem('token', token);

        console.log('Token:', token);
      },
      error => {
        // Handle error response
        console.error('Error:', error);
      }
    );
  }
}
