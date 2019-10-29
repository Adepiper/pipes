import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Toastr } from 'src/app/service/toastr.service';
import { IMovie, User } from 'src/app/user.model';
import { FavoriteService } from 'src/app/service/favorite.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[]
  @Input() sortBy: string;
  user: User
  constructor(private moviesList: UserService, private favoriteService: FavoriteService) {

  }

  ngOnInit() {
    this.movies = this.moviesList.getMovies()
  }
  toggleFavorite(movies: IMovie){
    if(this.userHasClicked(movies)){
      this.favoriteService.deleteFavorite(movies, this.user.lastName )
    } else {
      this.favoriteService.addFavorite(movies, this.user.lastName)
    }
  }

  userHasClicked(movies: IMovie){
    return this.favoriteService.userHasClicked(movies, this.user.lastName)
  }


}
