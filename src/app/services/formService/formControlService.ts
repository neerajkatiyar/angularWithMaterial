import {Injectable} from '@angular/core';
import {FormControl,FormGroup,Validators, FormArray} from '@angular/forms';

import { ControlBase} from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor(){}

    toFormGroup(controlsData : ControlBase<any>[]){
        let group : any = {};

        if(controlsData && controlsData instanceof Array && controlsData.length > 0)
        {
       
            controlsData.forEach(c => {
                if(c.controlType.toLowerCase() != 'button' && c.controlType.toLowerCase() !="custom")
                group[c.key] = new FormControl(c.value, c.validators || [] );

                if(c.controlType.toLowerCase() =="custom" && c.type.toLowerCase() == "multiple" && c.children && c.children.length > 0)
                {
                    
                    let childGroup : any = {};           

                    c.children.forEach(child => {
                        childGroup[child.key] = new FormControl(child.value, child.validators || [] );
                    });

                    group[c.key] = new FormArray([new FormGroup(childGroup)]);
                }
            });
             
        }
        // console.log("this is form group : "+ group)
        return new FormGroup(group);
    }

    insertInFormArray(fa:FormArray,controls : ControlBase<any>[])
    {
        fa.push(this.toFormGroup(controls));
    }
}
