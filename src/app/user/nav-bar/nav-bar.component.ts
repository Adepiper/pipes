import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm: string = "";
foundMovies: IMovie[];
  constructor(private movieService: UserService) { }

  ngOnInit() {
  }

  searchMovies(searchTerm){
    this.movieService.searchMovies(searchTerm)
      .subscribe( movies => {
        this.foundMovies = movies;
      })
  }
}
