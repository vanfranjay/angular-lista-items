import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaItemsRoutingModule } from './lista-items-routing.module';
import { ListaItemsComponent } from './lista-items.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaItemsComponent
  ],
  imports: [
    CommonModule,
    ListaItemsRoutingModule,
    MatInputModule,
    MatTableModule,
    FormsModule
  ]
})
export class ListaItemsModule { }
