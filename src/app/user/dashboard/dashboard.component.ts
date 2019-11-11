import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
searchTerm: string = "";
foundMovies: IMovie[]

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
