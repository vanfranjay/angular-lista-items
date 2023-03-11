import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', loadChildren: () => import('./pages/lista-items/lista-items.module').then(m => m.ListaItemsModule) },
  {path: "**", redirectTo: '/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
