import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PriceEngineeModule} from "./price-enginee.module";
import {PriceEngineeComponent} from "./price-enginee.component";

const routes: Routes = [
  {
    path: '', component: PriceEngineeComponent
  }
];
export const routing: ModuleWithProviders<PriceEngineeModule> =
  RouterModule.forChild(routes);
