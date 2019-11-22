import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../service/authservice.service';
import { TOASTR_TOKEN, Toastr } from '../service/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthserviceService, @Inject(TOASTR_TOKEN) private toastr: Toastr){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('user') != null){
        return true;
      } else {
        this.router.navigate(['#/Login']);
        this.toastr.error('Please Log in');
        return false;
      }
    }

}
