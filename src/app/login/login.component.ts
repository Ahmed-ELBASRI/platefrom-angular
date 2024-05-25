import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {LoginDto} from "../Dtos/loginDto";
import {MatSnackBar} from '@angular/material/snack-bar'
import {AdminLoginDto} from "../Dtos/AdminLoginDto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService : AuthService, private _snackBar : MatSnackBar) {
  }

  email : string ='';
  password : string ='';
  userType : string = 'user';


  onSubmit() {

    if (this.userType == 'user') {
      const loginDto : LoginDto={email_Vendeur : this.email,password : this.password};
      this.authService.login(loginDto).subscribe(

        response => {
          // Handle successful response
          const token = response.token;
          // Store the token in localStorage
          localStorage.setItem('token', token);


          this._snackBar.open('user not found', 'close', {
            duration : 3000,
          });

          console.log('Token:', token);

        },
        error => {
          // Handle error response
          console.error('Error:', error);

        }
      );



    } else {
      //for admin
      const AdminLogindto : AdminLoginDto={email_admin : this.email,password : this.password};

      this.authService.loginAdmin(AdminLogindto).subscribe(

        response => {
          // Handle successful response
          const token = response.token;
          // Store the token in localStorage
          localStorage.setItem('token', token);


          this._snackBar.open('user not found', 'close', {
            duration : 3000,
          });

          console.log('Token:', token);

        },
        error => {
          // Handle error response
          console.error('Error:', error);

        }
      );

    }


  }
}
