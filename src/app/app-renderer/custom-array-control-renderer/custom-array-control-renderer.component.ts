import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-array-control-renderer',
  templateUrl: './custom-array-control-renderer.component.html',
  styleUrls: ['./custom-array-control-renderer.component.css']
})
export class CustomArrayControlRendererComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlArrayName: string;
  @Input() renderingInfo: {};
  @Input() controlArray : any[];
  constructor() { }

  ngOnInit() {
  }

}
