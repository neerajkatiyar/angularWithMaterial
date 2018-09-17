import {
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatMenuModule,
MatGridListModule
} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
imports:[MatButtonModule,MatCheckboxModule,MatToolbarModule,MatMenuModule,MatGridListModule],
exports:[MatButtonModule,MatCheckboxModule,MatToolbarModule,MatMenuModule,MatGridListModule]
})
export class CustomMaterialModule
{

}