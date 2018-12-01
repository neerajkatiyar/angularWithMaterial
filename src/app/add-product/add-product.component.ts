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
  @Input() product :  any;
  products: any[] = [];
  @Input() form : FormGroup;
  
  constructor(private fcs : FormControlService) { }


  ngOnInit() {   
    this.products.push(this.product) 
  }

  onSubmit(){   
  }
    
  addProduct()
  {
    if(this.form.controls.product instanceof FormArray)
    {
      this.form.controls.product.push(this.fcs.toFormGroup(this.product))
    }
     // this.form.controls.push()
      this.products.push(this.product)
  }
}
