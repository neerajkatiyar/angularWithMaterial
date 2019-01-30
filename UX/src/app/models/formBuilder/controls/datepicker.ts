import {ControlBase} from '../controlBase';

export class DatePickerControl extends ControlBase<Date>{
    controlType = "datepicker"
    type: Date;

    constructor(options: {} = {}){
        super(options);
    }
}