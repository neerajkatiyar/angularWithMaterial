import {ControlBase} from '../controlBase';

export class DropdownContol extends ControlBase<string>{
    controlType = 'dropdown';
    options : {key:string , value: string}[] = [];

    constructor(options: {} = {})
    {
        super(options);
        this.options = options['options'] || [];
    }
}