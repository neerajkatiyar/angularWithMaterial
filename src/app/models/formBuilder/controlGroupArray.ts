import {ControlGroup} from '../formBuilder/controlGroup';
import {ControlBase} from './controlBase';

export class ControlGroupArray extends ControlBase<any>{
    controlType: "controlgrouparray";
    controls: Array<ControlGroup>;
}