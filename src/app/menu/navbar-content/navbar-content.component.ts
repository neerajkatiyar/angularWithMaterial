import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit {

@Output() closeNavBody = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {

  }

  close() {
    this.closeNavBody.emit(true);
  }
}
