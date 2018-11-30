import {Injectable} from '@angular/core';
import {FormControl,FormGroup,Validators, FormArray} from '@angular/forms';

import { ControlBase} from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor(){}

    toFormGroup(controlsData : ControlBase<any>[]){
        let group : any = {};

        controlsData.forEach(c => {
            if(c.controlType.toLowerCase() != 'button' && c.controlType.toLowerCase() !="custom")
            group[c.key] = new FormControl(c.value, c.validators || [] );

            if(c.controlType.toLowerCase() =="custom" && c.type.toLowerCase() == "multiple")
            {
               group[c.key] = new FormArray([]);             
            }
        });
        // console.log("this is form group : "+ group)
        return new FormGroup(group);
    }
}
