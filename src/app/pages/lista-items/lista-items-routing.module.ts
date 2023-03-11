import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaItemsComponent } from './lista-items.component';

const routes: Routes = [{ path: '', component: ListaItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaItemsRoutingModule { }
