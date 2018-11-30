import { ControlBase } from '../models/formBuilder/controlBase';
import { DropdownContol } from '../models/formBuilder/controls/dropdownControl';
import { TextboxControl } from '../models/formBuilder/controls/textboxControl';
import {ButtonControl } from '../models/formBuilder/controls/buttonControl';
import { Validators } from '@angular/forms';
import { Button } from 'protractor';
import {CustomControl} from '../models/formBuilder/controls/customControl';


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
            }),

            new ButtonControl({
                key: 'addCompaniess',
                label: 'n/a',
                order: 4,
                value: "Add Company",
                type:"button"
            }),

            new CustomControl({
                key: 'products',
                label: 'Products',
                order: 5,
                value: 'Products',
                type: 'multiple',
                controls: [
                    new TextboxControl({
                        key: 'name',
                        label: 'Product Name',
                        value: '',
                        validators:[Validators.required],
                        order: 1
                    }),
        
                    new TextboxControl({
                        key: 'description',
                        label: 'Product description ',
                        validators:[Validators.required],
                        order: 2,
                        required: true
                    }),
                ]
            })


        ];
        console.log([Validators.required])
        return questionControls.sort((a,b) => a.order - b.order);
    }
}