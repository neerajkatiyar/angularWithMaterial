import { ControlBase} from '../formBuilder/controlBase';

export class ControlGroup extends ControlBase<any>{
    controlType ="controlgroup";
    controls : ControlBase<any>[];
}