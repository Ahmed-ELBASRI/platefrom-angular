import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginDto} from "./Dtos/loginDto";
import {registerDto} from "./Dtos/registerDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  private apiUrl = 'https://localhost:7100/api';

  login(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/LoginVendeur`, loginDto);
  }

  register(registerDto : registerDto) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/LoginVendeur/register`, registerDto);
  }



}
