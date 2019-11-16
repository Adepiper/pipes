import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}

  close() {
    document.getElementsByTagName('app-modal')[0].classList.remove('show');
    document.getElementsByTagName('app-modal')[0].classList.remove('showModal');
  }
}
