import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user: User;
  constructor(private http: HttpClient) {}
  loginUser(email: string, password: string) {
    const loginInfo = { email, password };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(loginInfo);
    return this.http.post(
      'http://localhost:3000/user/login',
      loginInfo,
      options
    );
    /* .pipe(
        tap(data => {
          console.log(data);
          this.user = data['user'];
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      ); */
  }
  registerUser(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers
    };

    const body: User = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone
    };

    return this.http.post('http://localhost:3000/user/signup', body, options);
  }
}
