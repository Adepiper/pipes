import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators'
import { of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  constructor(private http: HttpClient) { }


  loginUser(email: string, password: string){

    const body = {email, password}
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers
    }
    console.log(body);
    return this.http.post('https://adepiper.herokuapp.com/user/login', body, options)
  }


  registerUser(user: User){
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const options = {
      headers
    }
    const body : User = {
      firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
    }

    return this.http.post('https://adepiper.herokuapp.com/user/signup', body, options)
  }

  logOut(){
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const options = {
      headers
    }
    return this.http.get('https://adepiper.herokuapp.com/user/logout', options)
  }

    isAuthenticated(){
      return !!this.user;
    }


}
