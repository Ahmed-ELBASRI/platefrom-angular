import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginDto} from "./Dtos/loginDto";
import {registerDto} from "./Dtos/registerDto";
import {AdminLoginDto} from "./Dtos/AdminLoginDto";
import {NewLetterDto} from "./Dtos/NewLetterDto";
import {environment} from "./environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  private apiUrl = environment.apiUrl;

  login(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/LoginVendeur`, loginDto);
  }

  register(registerDto : registerDto) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/LoginVendeur/register`, registerDto);
  }


  loginAdmin(loginDto: AdminLoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Admin`, loginDto);
  }

  AddEmailNewsLetter(newLetter : NewLetterDto) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/NewsLetter`,newLetter);
  }





}
