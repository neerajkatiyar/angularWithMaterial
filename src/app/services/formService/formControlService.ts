import {Injectable} from '@angular/core';
import {FormControl,FormGroup,Validators, FormArray} from '@angular/forms';

import { ControlBase} from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor(){}

    toFormGroup(controlsData : ControlBase<any>[]){
        return this.CreateFormGroup(controlsData);
    }

    private CreateFormArray(control: ControlBase<any>)
    {
        if(control.controlType.toLowerCase() =="custom" && control.type.toLowerCase() == "multiple" && control.children && control.children.length > 0)
        {
            let formGroup : any = this.CreateFormGroup(control.children);
            return new FormArray([formGroup]);
        }
        return new FormArray([]);//return empty formArray if control is not custom
    }

    private CreateFormGroup(controlsData : ControlBase<any>[])
    {
        let group : any = {};
        if(controlsData && controlsData instanceof Array && controlsData.length > 0)
        {
            controlsData.forEach(c => {
                    if(c.controlType.toLowerCase() != 'button' && c.controlType.toLowerCase() !="custom")
                    group[c.key] = new FormControl(c.value, c.validators || [] );

                    if(c.controlType.toLowerCase() =="custom" && c.type.toLowerCase() == "multiple" && c.children && c.children.length > 0)
                        group[c.key] = this.CreateFormArray(c);
            });             
        }
        return new FormGroup(group);
    }


    insertInFormArray(fa:FormArray,controls : ControlBase<any>[])
    {
        fa.push(this.toFormGroup(controls));
    }
}
