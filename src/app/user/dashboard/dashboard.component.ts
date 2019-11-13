import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private movieService: UserService) { }

  ngOnInit() {
  }

}
