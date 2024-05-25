import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageServiceService} from "../../language-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translate : TranslateService,private languageService :LanguageServiceService) {
    this.translate.setDefaultLang('en');

  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.languageService.setLanguage(language);
  }
}
