import { ControlBase } from '../models/formBuilder/controlBase';
import { DropdownContol } from '../models/formBuilder/controls/dropdownControl';
import { TextboxControl } from '../models/formBuilder/controls/textboxControl';
import { ButtonControl } from '../models/formBuilder/controls/buttonControl';
import { Validators } from '@angular/forms';
import { CustomControl } from '../models/formBuilder/controls/customControl';
import { CheckboxControl } from '../models/formBuilder/controls/checkbox';
import { DatePickerControl } from '../models/formBuilder/controls/datepicker';

export class TestQuestionservice {
    getQuestions() {
        const questionControls = {
            formGroupInfo:{
                type: 'cust',
                renderingInfo:{
                    //additional rendering info goes here...like css, html and control design etc.
                    products : {controlType:"custom", dataType: 'products'}
                }
            },
            braveryRating: new DropdownContol({
                key: 'braveryRating',
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

            firstName: new TextboxControl({
                key: 'firstName',
                label: 'First Name',
                value: 'Bombasto',
                validators: [Validators.required],
                order: 1
            }),

            emailAddress: new TextboxControl({
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

            // new ControlGroup({

            // }),

            product: {
                   formGroupInfo:{
                       type: 'product',
                       renderingInfo:{
                           //additional rendering info goes here...like css, html and control design etc.
                       }
                   },
                   name: new TextboxControl({
                        key: 'name',
                        label: 'Product Name',
                        value: '',
                        validators: [Validators.required],
                        order: 1
                    }),
                  description:  new TextboxControl({
                        key: 'description',
                        label: 'Product Description',
                        value: '',
                        validators: [Validators.required],
                        order: 2
                    }),
                    imagePath:"/assets/images/cover_img0.jpg",
                    testArray: ["343","999","9i898"],
                    imported: new CheckboxControl({
                        key : 'imported',
                        label: 'Is Imported',
                        value: false,
                    }),
                    importedDate: new DatePickerControl({
                        key: 'importedDate',
                        label: 'Imported Date',
                        value: null,
                        validators: [Validators.required]
                    })           
                 
            },
            products: [{
                formGroupInfo:{
                    type: 'product',
                    renderingInfo:{
                        //additional rendering info goes here...like css, html and control design etc.
                    }
                },
                name: new TextboxControl({
                     key: 'name',
                     label: 'Product Name',
                     value: '',
                     validators: [Validators.required],
                     order: 1
                 }),
               description:  new TextboxControl({
                     key: 'description',
                     label: 'Product Description',
                     value: '',
                     validators: [Validators.required],
                     order: 2
                 }),
                 imagePath:"/assets/images/cover_img1.jpg" ,
                 testArray: ["343","999","9i898"]                 
              
         },
         {
            formGroupInfo:{
                type: 'product',
                renderingInfo:{
                    //additional rendering info goes here...like css, html and control design etc.
                }
            },
            name: new TextboxControl({
                 key: 'name',
                 label: 'Product Name',
                 value: '',
                 validators: [Validators.required],
                 order: 1
             }),
           description:  new TextboxControl({
                 key: 'description',
                 label: 'Product Description',
                 value: '',
                 validators: [Validators.required],
                 order: 2
             }),
             imagePath:"/assets/images/cover_img2.jpg" ,
             testArray: ["343","999","9i898"]                    
          
        }]

            ,
            save : new ButtonControl({
                key: 'save',
                label: 'n/a',
                order: 4,
                value: "Save Data",
                type:"submit"
            })
        }
        return questionControls; //.sort((a, b) => a.order - b.order);
    }
}
