import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  constructor(private route: ActivatedRoute, private movieService: UserService) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie
      (+this.route.snapshot.params['id']);
  }

}
