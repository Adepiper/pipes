import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatorService implements CanActivate {

  constructor(private movieService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
      const idEdxists = !!this.movieService.getMovie(+route.params['id'])
      if (!idEdxists)
      this.router.navigate(['/error'])
      return idEdxists;

    }
}
