import { Injectable, Inject } from '@angular/core';
import { User } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap, catchError, retry} from 'rxjs/operators'
import { of, throwError } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { error } from '@angular/compiler/src/util';
import { TOASTR_TOKEN, Toastr } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  constructor(private http: HttpClient, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }


  loginUser(email: string, password: string){

    const body = {email, password}
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers
    }
    console.log(body);
    return this.http.post('https://adepiper.herokuapp.com/user/login', body, options)
                .pipe(retry(1),
                catchError(this.handleError)
                );
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
                .pipe(retry(1),
               catchError(this.handleError)
                );
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

    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent ){
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Message: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}
