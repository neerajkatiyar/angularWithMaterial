import { Component, OnInit, Input } from '@angular/core';
import { ControlBase } from '../../models/formBuilder/controlBase';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../../services/formService/formControlService';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
  providers: [FormControlService]
})
export class FormRendererComponent implements OnInit {

  @Input() controls : any;
  @Input() form? : FormGroup;
  payLoad = '';
  constructor(private fcs : FormControlService) {}


  ngOnInit() {    
    this.form ? this.form.patchValue(this.fcs.toFormGroup(this.controls)) : this.form = this.fcs.toFormGroup(this.controls);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

  controlAscOrder = (a: KeyValue<number,any>, b: KeyValue<number,any>): number => {
  if(this.controls.formGroupInfo.renderingInfo[a.key] && this.controls.formGroupInfo.renderingInfo[a.key].order && this.controls.formGroupInfo.renderingInfo[b.key] && this.controls.formGroupInfo.renderingInfo[b.key].order)
    return this.controls.formGroupInfo.renderingInfo[a.key].order  - this.controls.formGroupInfo.renderingInfo[b.key].order;  //a.value.order - b.value.order;
  else
        return Object.keys(this.controls).length - 1;
  }
}