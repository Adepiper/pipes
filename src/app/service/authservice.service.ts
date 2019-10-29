import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  constructor(private http: HttpClient) { }
  loginUser(email: string, password: string){

    let loginInfo = {email, password}
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.user = <User>data['user']
      }))
        .pipe(catchError(err => {
          return of(false)
        }))
  }
  registerUser(user: User){
    const body : User = {
      firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
    }

    return this.http.post('api/signup', body)
  }


}
