import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/user.model';
import { UserService } from '../user.service';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm: string = "";
foundMovies: IMovie[];
  constructor(private movieService: UserService,
              public auth : AuthserviceService,
              private router: Router,

              ) { }

  ngOnInit() {
  }

  searchMovies(searchTerm){
    this.movieService.searchMovies(searchTerm)
      .subscribe( movies => {
        this.foundMovies = movies;
      })
  }

  logOut(){
    this.auth.logOut().subscribe( data => {
      console.log(data);
      localStorage.removeItem('user');
      this.router.navigate(['/Login']);
    });
  }
}
