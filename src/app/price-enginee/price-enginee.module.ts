import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './price-enginee-routing.module';
import { PriceEngineeComponent } from './price-enginee.component';
import {PriceEngineeService} from "./price-enginee.service";
import { GetPriceComponent } from './get-price/get-price.component';
import { OnPriceComponent } from './on-price/on-price.component';


@NgModule({
  declarations: [
    PriceEngineeComponent,
    GetPriceComponent,
    OnPriceComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [
    PriceEngineeService
  ]
})
export class PriceEngineeModule { }
