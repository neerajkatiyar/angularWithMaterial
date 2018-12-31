import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { ControlBase } from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor() { }

    toFormGroup(formData: {}) {
        return this.CreateFormGroup(formData);
    }

    private CreateFormArray(formArray: [{}]) {
        let formGroupArray: any = []
        if (formArray) {
            formArray.forEach(x => {
                if (x instanceof Object && (x as any).formGroupInfo)
                    formGroupArray.push(this.CreateFormGroup(x));
            });
            if (formGroupArray.length == 0) {
                return formArray;
            }
        }
        return new FormArray(formGroupArray);
    }

    private CreateFormGroup(formData: {}): FormGroup {
        let group: any = {};
        if (formData) {
            Object.keys(formData).forEach(p => {

                if (p && p.toUpperCase() !== "FORMGROUPINFO" && !(formData[p] instanceof Array)) {
                    if (formData[p].key) {
                        group[p] = new FormControl(formData[p].value, formData[p].validators || []);
                    }
                    else if (formData[p].formGroupInfo) {
                        group[p] = this.CreateFormGroup(formData[p]);
                    }
                }
                else if ((formData[p] instanceof Array)) {
                    var fa = this.CreateFormArray(formData[p]);
                    if (fa instanceof FormArray) {
                        group[p] = fa;
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
