import { Injectable } from '@angular/core';
import { IMovie } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  addFavorite(movies: IMovie, favoriteName: string){
    movies.favorite.push(favoriteName)
  }

  deleteFavorite(movies: IMovie, favoriteName: string){
    movies.favorite = movies.favorite.filter(favorite => favorite !== favoriteName)
  }

  userHasClicked(movies: IMovie, favoriteName: string){
    return movies.favorite.some(favorite => favorite === favoriteName)
  }
}
