import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlArrayName: string;
  @Input() renderingInfo: {};
  @Input() controlArray: any[];
  constructor() {  }

  ngOnInit() {}

}
