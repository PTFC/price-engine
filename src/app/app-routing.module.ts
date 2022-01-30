import {AppModule} from "./app.module";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: 'price', pathMatch: 'full' },
  {
    path: 'price',
    loadChildren: () =>
      import('./price-enginee/price-enginee.module').then(
        (m) => m.PriceEngineeModule
      ),
  },
];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(
  routes,
  {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
  }
);
