import {ControlBase} from '../controlBase';

export class CheckboxControl extends ControlBase<boolean>{
    controlType = "checkbox"
    type: boolean;

    constructor(options: {} = {}){
        super(options);
    }
}