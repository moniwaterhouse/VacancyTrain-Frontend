import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInfo, RegisterInfo } from '../_interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  username !: string;
  usernameAux : BehaviorSubject<string> = new BehaviorSubject(this.username);

  constructor(private http: HttpClient) { }

  setUsername(email : string){
    this.username = email;
    this.usernameAux.next(this.username);
  }

  logIn(user : LoginInfo){
    return this.http.post(`${environment.apiUrl}/login`, user);
  }

  signUp(user : RegisterInfo){
    return this.http.post(`${environment.apiUrl}/sign_up`, user);
  }

}