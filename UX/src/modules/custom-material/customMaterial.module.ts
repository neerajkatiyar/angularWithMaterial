import {
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatMenuModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatCardModule,
MatDatepickerModule,
MatNativeDateModule,
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
imports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule,
         MatSelectModule,MatCardModule,
         MatDatepickerModule,MatNativeDateModule
        ],
exports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule,
         MatSelectModule,MatCardModule,
         MatDatepickerModule,MatNativeDateModule
        ]
})
export class CustomMaterialModule
{

}