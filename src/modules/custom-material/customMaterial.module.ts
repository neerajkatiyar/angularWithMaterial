import {
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatMenuModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
imports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule
        ],
exports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule
        ]
})
export class CustomMaterialModule
{

}