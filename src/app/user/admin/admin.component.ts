import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  newMovie: FormGroup;

  constructor(private formBuilder: FormBuilder, private movieService: UserService, private router: Router) {}

  ngOnInit() {
    this.newMovie = this.formBuilder.group({
      name: ['', Validators.required],
      plot: ['', Validators.required],
      imageUrl: ['', Validators.required],
      year: ['', Validators.required],
      time: ['', Validators.required]
    })
  }
  submit() {
    this.movieService.saveMovie(this.newMovie.value);
    console.log(this.newMovie.value);
    this.router.navigate(['#/movies'])
  }
}
