import { Component, Input } from '@angular/core';
import { ControlBase } from '../../models/formBuilder/controlBase';
import { FormGroup } from '@angular/forms';
import { ValidationErrors, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-control-renderer',
  templateUrl: './control-renderer.component.html',
  styleUrls: ['./control-renderer.component.css']
})
export class ControlRendererComponent{
  @Input() control : ControlBase<any>;
  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() controlRenderingInfo: {};
  constructor(){
   
  }

  get isValid(){
    return  this.control.validators ? this.form.controls[this.control.key].valid : true;
  }
}
