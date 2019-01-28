import { Component, Input, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { ControlBase } from '../../models/formBuilder/controlBase';
import { FormGroup, Validators, AsyncValidator } from '@angular/forms';
import { ValidationErrors, ValidatorFn } from "@angular/forms";
import '../../helpers/cssHelper.extensions';
import{ ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-control-renderer',
  templateUrl: './control-renderer.component.html',
  styleUrls: ['./control-renderer.component.css']
})
export class ControlRendererComponent implements AfterViewChecked {
  @Input() control: ControlBase<any>;
  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() controlRenderingInfo: {};
  constructor(  private cdRef : ChangeDetectorRef ) { }

  get isValid() {
    return this.control.validators ? this.form.controls[this.control.key].valid : true;
  }

  visible(controlName, element: HTMLElement) {
    if (this.controlRenderingInfo[controlName] && (this.controlRenderingInfo[controlName].visibility  || this.controlRenderingInfo[controlName].disabled)) {
      let isVisible = eval(this.controlRenderingInfo[controlName].visibility)
      let isDisabled = eval(this.controlRenderingInfo[controlName].disabled)
      if (isVisible && !isDisabled) {
        if (element.hasClass("disabled")) {
          element.removeClass("disabled");
        }
        this.form.get(controlName).enable();
      }
      else {
        if (isDisabled) {
          element.addClass("disabled");
        }
        this.form.get(controlName).disable();
        
      }
      
      return isVisible;
    }
    return true;
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

}
