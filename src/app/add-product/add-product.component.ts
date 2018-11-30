import { Component, OnInit , Input} from '@angular/core';
import { ControlBase } from '../models/formBuilder/controlBase';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../services/formService/formControlService';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() products : ControlBase<any>[] = [];
  form : FormGroup;

  constructor(private fcs : FormControlService) { }


  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.products);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

}
