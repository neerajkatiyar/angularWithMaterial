
import {NgModule  } from "@angular/core";
import { CommonModule } from '@angular/common';
import {ProductListingComponent} from "./product-listing/product-listing.component";
import {ProductRoutingModule} from "./productListing.routing.module";

@NgModule({
imports : [
    CommonModule,
    ProductRoutingModule
],
declarations: [ProductListingComponent]
})
export class ProductListModule{

}