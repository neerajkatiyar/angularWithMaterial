import {ControlBase} from '../controlBase';

export class TextboxControl extends ControlBase<string>{
    controlType = "textbox"
    type: string;

    constructor(options: {} = {type:"text"}){
        super(options);
        this.type = options['type'] || '';
    }
}