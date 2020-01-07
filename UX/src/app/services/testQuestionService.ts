import { ControlBase } from '../models/formBuilder/controlBase';
import { DropdownContol } from '../models/formBuilder/controls/dropdownControl';
import { TextboxControl } from '../models/formBuilder/controls/textboxControl';
import { ButtonControl } from '../models/formBuilder/controls/buttonControl';
import { Validators } from '@angular/forms';
import { CustomControl } from '../models/formBuilder/controls/customControl';
import { CheckboxControl } from '../models/formBuilder/controls/checkbox';
import { DatePickerControl } from '../models/formBuilder/controls/datepicker';
import { JsonPipe } from '@angular/common';
import {HttpService} from '../services/httpService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class TestQuestionservice extends HttpService {
    /**
     *
     */
     baseUrl = "https://localhost:44380/";
    constructor(http:HttpClient) {
        super(http);
         this.getConfigResponse().subscribe(x=>{
            this.baseUrl = x.body.baseUrl
         });
    };
    getQuestions() {
        // const questionControls = {
        //     formGroupInfo:{
        //         type: 'cust',
        //         renderingInfo:{
        //             //additional rendering info goes here...like css, html and control design etc.
        //             products : { order: 5, controlType:"custom", dataType: 'products', visibility : 'this.form.controls.firstName.value == "products"', disabled: "!this.form.controls.emailAddress.value"},
        //             braveryRating:{order:3},
        //             firstName:{order:1},
        //             emailAddress:{order:2},
        //             product:{order:4},
        //             save:{order:7}

        //         }
        //     },
        //     braveryRating: new DropdownContol({
        //         key: 'braveryRating',
        //         label: 'Bravery Rating',
        //         validators: ['required'],
        //         options: [
        //             { key: 'Solid', value: 'Solid' },
        //             { key: 'Great', value: 'Great' },
        //             { key: 'good', value: 'Good' },
        //             { key: 'unproven', value: 'Unproven' }
        //         ],
        //     }),

        //     firstName: new TextboxControl({
        //         key: 'firstName',
        //         label: 'First Name',
        //         value: 'Bombasto',
        //         validators: ['required'],
        //     }),

        //     emailAddress: new TextboxControl({
        //         key: 'emailAddress',
        //         label: 'Email',
        //         validators: ['required', 'email'],
        //         required: true
        //     }),

        //     // new ButtonControl({
        //     //     key: 'addCompaniess',
        //     //     label: 'n/a',
        //     //     order: 4,
        //     //     value: "Add Company",
        //     //     type:"button"
        //     // }),

        //     // new ControlGroup({

        //     // }),

        //     product: {
        //            formGroupInfo:{
        //                type: 'product',
        //                renderingInfo:{
        //                    //additional rendering info goes here...like css, html and control design, visibility etc.
        //                    importedDate:{order: 3, visibility:"this.form.controls.imported.value == true", disabled: "this.form.controls.name.value  == ''"},
        //                    name: {order:1},
        //                    description: {order:4},
        //                    imported : {order:2},
        //                }
        //            },
        //            name: new TextboxControl({
        //                 key: 'name',
        //                 label: 'Product Name',
        //                 value: '',
        //                 validators: ['required'],
        //             }),
        //           description:  new TextboxControl({
        //                 key: 'description',
        //                 label: 'Product Description',
        //                 value: '',
        //                 validators: ['required'],
        //             }),
        //             imagePath:"/assets/images/cover_img0.jpg",
        //             testArray: ["343","999","9i898"],
        //             imported: new CheckboxControl({
        //                 key : 'imported',
        //                 label: 'Is Imported',
        //                 value: false,
        //             }),
        //             importedDate: new DatePickerControl({
        //                 key: 'importedDate',
        //                 label: 'Imported Date',
        //                 value: null,
        //                 validators: ['required']
        //             })           
                 
        //     },
        //     products: [{
        //         formGroupInfo:{
        //             type: 'product',
        //             renderingInfo:{
        //                 //additional rendering info goes here...like css, html and control design etc.
        //                 name:{order: 1},
        //                 description:{order:2}
        //             }
        //         },
        //         name: new TextboxControl({
        //              key: 'name',
        //              label: 'Product Name',
        //              value: '',
        //              validators: ['required'],
        //          }),
        //        description:  new TextboxControl({
        //              key: 'description',
        //              label: 'Product Description',
        //              value: '',
        //              validators: ['required'],
        //          }),
        //          imagePath:"/assets/images/cover_img1.jpg" ,
        //          testArray: ["343","999","9i898"]                 
              
        //  },
        //  {
        //     formGroupInfo:{
        //         type: 'product',
        //         renderingInfo:{
        //             //additional rendering info goes here...like css, html and control design etc.
        //             name:{order:1},
        //             description: {order:2}
        //         }
        //     },
        //     name: new TextboxControl({
        //          key: 'name',
        //          label: 'Product Name',
        //          value: '',
        //          validators: ['required'],
        //      }),
        //    description:  new TextboxControl({
        //          key: 'description',
        //          label: 'Product Description',
        //          value: '',
        //          validators: ['required'],
        //      }),
        //      imagePath:"/assets/images/cover_img2.jpg" ,
        //      testArray: ["343","999","9i898"]                    
          
        // }]

        //     ,
        //     save : new ButtonControl({
        //         key: 'save',
        //         label: 'n/a',
        //         value: "Save Data",
        //         type:"submit"
        //     })
        // }
        // let json_data = JSON.stringify(questionControls);
        // console.log(json_data);
        // return  JSON.parse(json_data); //.sort((a, b) => a.order - b.order);


     return  this.get<any>( this.baseUrl + "api/vx/5c840bbb2d1599b12370004f");

    }
}
