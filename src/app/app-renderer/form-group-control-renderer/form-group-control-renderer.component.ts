import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-control-renderer',
  templateUrl: './form-group-control-renderer.component.html',
  styleUrls: ['./form-group-control-renderer.component.css']
})
export class FormGroupControlRendererComponent implements OnInit {
  @Input() controlGroup : {};
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
