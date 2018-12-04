import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { ControlBase } from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor() { }

    toFormGroup(controlsData: ControlBase<any>[]) {
        return this.CreateFormGroup(controlsData);
    }

    private CreateFormArray(controls: Array<ControlBase<any>[]>) {
        let formArray: Array<FormGroup> = [];
        controls.forEach(child=>{
            formArray.push(this.CreateFormGroup(child));
        });
        return new FormArray(formArray);
    }

    private CreateFormGroup(controlsData: ControlBase<any>[]) {
        let group: any = {};
        if (controlsData && controlsData instanceof Array && controlsData.length > 0) {
            controlsData.forEach(c => {
                if (c.controlType.toLowerCase() != 'button' && c.controlType.toLowerCase() != "custom") {
                    group[c.key] = new FormControl(c.value, c.validators || []);
                }
                else if (c.controlType.toLowerCase() == "custom") {
                        if(c.children)
                        {
                                group[c.key] = this.CreateFormArray(c.children);
                        }
                        else{
                            group[c.key] = new FormControl(c.value, c.validators || []);
                        }                    
                }
            });
        }
        return new FormGroup(group);
    }


    insertInFormArray(fa: FormArray, controls: ControlBase<any>[]) {
        fa.push(this.toFormGroup(controls));
    }
}
