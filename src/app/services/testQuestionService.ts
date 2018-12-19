import { ControlBase } from '../models/formBuilder/controlBase';
import { DropdownContol } from '../models/formBuilder/controls/dropdownControl';
import { TextboxControl } from '../models/formBuilder/controls/textboxControl';
import { ButtonControl } from '../models/formBuilder/controls/buttonControl';
import { Validators } from '@angular/forms';
import { CustomControl } from '../models/formBuilder/controls/customControl';
import { ControlGroup } from '../models/formBuilder/controlGroup';

export class TestQuestionservice {
    getQuestions() {
        const questionControls: ControlBase<any>[] = [
            new DropdownContol({
                key: 'brave',
                label: 'Bravery Rating',
                validators: [Validators.required],
                options: [
                    { key: 'Solid', value: 'Solid' },
                    { key: 'Great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3

            }),

            new TextboxControl({
                key: 'firstName',
                label: 'First Name',
                value: 'Bombasto',
                validators: [Validators.required],
                order: 1
            }),

            new TextboxControl({
                key: 'emailAddress',
                label: 'Email',
                validators: [Validators.required, Validators.email],
                order: 2,
                required: true
            }),

            // new ButtonControl({
            //     key: 'addCompaniess',
            //     label: 'n/a',
            //     order: 4,
            //     value: "Add Company",
            //     type:"button"
            // }),

            new ControlGroup({

            }),

            new CustomControl({
                key: 'product',
                label: 'Products',
                order: 5,
                value: 'Products',
                type: 'multiple',
                children: [
                    new TextboxControl({
                        key: 'name',
                        label: 'Product Name',
                        value: '',
                        validators: [Validators.required],
                        order: 1
                    }),
                    new TextboxControl({
                        key: 'description',
                        label: 'Product Description',
                        value: '',
                        validators: [Validators.required],
                        order: 2
                    })
                ]
            })


        ];
        return questionControls.sort((a, b) => a.order - b.order);
    }
}
