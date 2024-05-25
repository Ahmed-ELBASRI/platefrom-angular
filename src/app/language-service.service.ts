import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor(private translate: TranslateService) { }

  private currentLanguageSubject = new Subject<string>();
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  setLanguage(language: string) {
    // Set the current language
    this.currentLanguageSubject.next(language);
  }
}
