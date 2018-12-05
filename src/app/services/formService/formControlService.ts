import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { ControlBase } from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor() { }

    toFormGroup(controlsData: ControlBase<any>[]) {
        return this.CreateFormGroup(controlsData);
    }

    private CreateFormArray(controls: ControlBase<any>[]) {
        let formGroup: any = this.CreateFormGroup(controls);
        return new FormArray([formGroup]);
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
                            if (c.type.toLowerCase() == "multiple") {
                                group[c.key] = this.CreateFormArray(c.children);
                            }
                            // else
                            //     group[c.key] = this.CreateFormGroup(c.children);
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
