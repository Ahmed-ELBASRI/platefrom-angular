import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {LoginDto} from "../Dtos/loginDto";
import {registerDto} from "../Dtos/registerDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService : AuthService , private router: Router) {
  }

  nom_Venduer : string = '';
  prenom_Vendeur : string = '';
  email_Vendeur  : string = '';
  password : string = '';


  onSubmit(){

    const registerDto : registerDto ={nom_Venduer : this.nom_Venduer,prenom_Vendeur : this.prenom_Vendeur , email_Vendeur : this.email_Vendeur,password : this.password};
    console.log(registerDto);
    this.authService.register(registerDto).subscribe(

      response => {
        // Handle successful response

        console.log(response);
        this.router.navigate(['/login']);



      },
      error => {
        // Handle error response
        console.error('Error:', error);

      }
    );

  }

}
