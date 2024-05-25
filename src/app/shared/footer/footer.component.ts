import { Component } from '@angular/core';
import {AuthService} from "../../auth.service";
import {NewLetterDto} from "../../Dtos/NewLetterDto";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private authService : AuthService) {
  }

  Email : string= '';
  onSubmit(){

    const newletterdto : NewLetterDto = {Email :this.Email};
    this.authService.AddEmailNewsLetter(newletterdto).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
