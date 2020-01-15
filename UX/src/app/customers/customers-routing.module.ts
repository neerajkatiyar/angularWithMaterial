import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCountComponent } from './customer-count/customer-count.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    children : [
      {
        path: 'count',
        component: CustomerCountComponent,
      }
    ]
  },
  {
    path:'testPathOf-customerList',
    component: CustomerInfoComponent
  }
  ,


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }