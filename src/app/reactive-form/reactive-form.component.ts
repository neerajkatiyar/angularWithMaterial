import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  name :  FormControl = new FormControl('');

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
