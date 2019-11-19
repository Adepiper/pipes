import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthserviceService) { }

  ngOnInit() {
  }
  isAuthenticated(){
   return localStorage.getItem('user');
  }
}
