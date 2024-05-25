import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {LoginDto} from "../Dtos/loginDto";
import {MatSnackBar} from '@angular/material/snack-bar'
import {AdminLoginDto} from "../Dtos/AdminLoginDto";
import {TranslateService} from "@ngx-translate/core";
import {LanguageServiceService} from "../language-service.service";
import {Subscription} from "rxjs";
import { environment } from '../environments/environment';
import {Router} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  constructor(private authService : AuthService, private _snackBar : MatSnackBar,private languageService: LanguageServiceService, private translate: TranslateService,private router: Router,private location: Location) {
  }

  currentLanguage!: string;
  private languageSubscription!: Subscription;

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
      this.translate.use(language);
    });
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  email : string ='';
  password : string ='';
  userType : string = 'user';


  onSubmit() {
    const apiUrl =environment.apiUrlDashboard;

    if (this.userType == 'user') {
      const loginDto : LoginDto={email_Vendeur : this.email,password : this.password};
      this.authService.login(loginDto).subscribe(

        response => {
          // Handle successful response
          const token = response.token;
          // Store the token in localStorage
          localStorage.setItem('token', token);


          this.location.go(apiUrl);


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

        //  this.router.navigateByUrl(environment.apiUrlDashboard);

          this.location.go(apiUrl);




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
