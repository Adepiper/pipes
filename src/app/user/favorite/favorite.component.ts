import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() favorited: boolean;
  @Output() favorite = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorite.emit({});
  }

}
