import {ControlBase} from '../controlBase';

export class CustomControl extends ControlBase<string>{
    controlType = "custom"
    type: any;
    controls:ControlBase<any>[];

    constructor(options: {} = {}){
        super(options);
        this.type = options['type'] || '';
    }
}