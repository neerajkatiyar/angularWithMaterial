import {ControlBase} from '../controlBase';

export class ButtonControl extends ControlBase<string>{
    controlType = 'button';
    type: string;

    constructor(options: {} = {type:"button"})
    {
        super(options);
        this.type = options['type'] || '';
    }
}