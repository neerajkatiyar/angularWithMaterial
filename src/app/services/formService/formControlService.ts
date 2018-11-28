import {Injectable} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

import { ControlBase} from '../../models/formBuilder/controlBase';

@Injectable()
export class FormControlService {
    constructor(){}

    toFormGroup(controlsData : ControlBase<any>[]){
        let group : any = {};

        controlsData.forEach(c => {
            group[c.key] = new FormControl(c.value, c.validators || [] );
        });

        return new FormGroup(group);
    }
}