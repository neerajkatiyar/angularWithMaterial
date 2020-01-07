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
MatProgressSpinnerModule
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
imports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule,
         MatSelectModule,MatCardModule,
         MatDatepickerModule,MatNativeDateModule,
         MatProgressSpinnerModule
        ],
exports:[
         MatButtonModule,MatCheckboxModule,
         MatToolbarModule,MatMenuModule,
         MatGridListModule,MatFormFieldModule,MatInputModule,
         MatSelectModule,MatCardModule,
         MatDatepickerModule,MatNativeDateModule,
         MatProgressSpinnerModule
        ]
})
export class CustomMaterialModule
{

}