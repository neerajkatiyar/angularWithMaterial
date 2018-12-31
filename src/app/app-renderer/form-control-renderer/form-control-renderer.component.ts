import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control-renderer',
  templateUrl: './form-control-renderer.component.html',
  styleUrls: ['./form-control-renderer.component.css']
})
export class FormControlRendererComponent implements OnInit {
  @Input() control: {};
  @Input() form : FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
