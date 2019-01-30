import { Component, OnInit , Input} from '@angular/core';
import { ControlBase } from '../models/formBuilder/controlBase';
import { FormGroup, FormArray } from '@angular/forms';
import { FormControlService } from '../services/formService/formControlService';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() controlGroup :  {};
  @Input() controlGroupName: string;
  @Input() form : FormGroup;
  constructor(private fcs : FormControlService) { }


  ngOnInit() {}
    
  addProduct()
  {
  //  this.fcs.insertInFormArray(<FormArray>this.form.controls.product,this.productControls);
  }
}
