import {
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatMenuModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatCardModule
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
imports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule,
         MatSelectModule,MatCardModule
        ],
exports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule,
         MatSelectModule,MatCardModule
        ]
})
export class CustomMaterialModule
{

}