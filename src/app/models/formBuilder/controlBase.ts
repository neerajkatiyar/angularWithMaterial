import { ValidationErrors, ValidatorFn } from "@angular/forms";

export class ControlBase<T>{
    value: T;
    key: string;
    label: string;
    validators: ValidatorFn[];
    order: number;
    controlType: string;
    type:string;
    children: ControlBase<T>[];
    constructor(options: {
        value? : T,
        key?: string,
        label?: string,
        validators?: ValidatorFn[],
        order?: number,
        controlType? : string,
        children?:any
     } = {}){
        this.value = options.value;
        this.key = options.key || '';
        this.label =  options.label || '';
        this.validators = options.validators ;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.children = options.children;
    }
}