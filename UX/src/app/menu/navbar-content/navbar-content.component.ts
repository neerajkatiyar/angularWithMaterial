import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit {

@Output() closeNavBody = new EventEmitter<boolean>();
@Input() selectedMenuId: number;
  constructor() { }

  ngOnInit() {

  }

  close() {
    this.closeNavBody.emit(true);
  }
}
