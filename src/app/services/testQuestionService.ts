import { ControlBase } from '../models/formBuilder/controlBase';
import { DropdownContol } from '../models/formBuilder/controls/dropdownControl';
import { TextboxControl } from '../models/formBuilder/controls/textboxControl';
import { Validators } from '@angular/forms';



export class TestQuestionservice{
    getQuestions(){
        let questionControls : ControlBase<any>[] = [
            new DropdownContol({
                key: 'brave',
                label: 'Bravery Rating',
                validators:[Validators.required],
                options : [
                    {key: 'Solid', value: 'Solid'},
                    {key: 'Great', value: 'Great'},
                    {key: 'good',   value: 'Good'},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 3

            }),

            new TextboxControl({
                key: 'firstName',
                label: 'First Name',
                value: 'Bombasto',
                validators:[Validators.required],
                order: 1
            }),

            new TextboxControl({
                key: 'emailAddress',
                label: 'Email',
                validators:[Validators.required,Validators.email],
                order: 2,
                required: true
            })
        ];
        console.log([Validators.required])
        return questionControls.sort((a,b) => a.order - b.order);
    }
}