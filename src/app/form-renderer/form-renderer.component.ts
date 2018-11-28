import { Component, OnInit, Input } from '@angular/core';
import { ControlBase } from '../models/formBuilder/controlBase';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../services/formService/formControlService';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css'],
  providers: [FormControlService]
})
export class FormRendererComponent implements OnInit {

  @Input() controls : ControlBase<any>[] = [];
  form : FormGroup;
  payLoad = '';

  constructor(private fcs : FormControlService) { }


  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.controls);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

}
