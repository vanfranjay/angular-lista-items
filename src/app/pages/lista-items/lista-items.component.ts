import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../service/data/data.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.scss']
})
export class ListaItemsComponent{
  displayedColumns= ['id', 'item', 'descripción', 'selection']; // reemplaza con tus propias columnas
  data: any[] = [
    { id: '1', item: 'John', descripción: 25, selection: 'New York' },
     { id: '2', item: 'Jane', descripción: 30, selection: 'Los Angeles' },
     { id: '3', item: 'Bob', descripción: 40, selection: 'Chicago' },
     { id: '4', item: 'Alice', descripción: 35, selection: 'San Francisco' },
     { id: '1', item: 'John', descripción: 25, selection: 'New York' },
     { id: '2', item: 'Jane', descripción: 30, selection: 'Los Angeles' },
     { id: '3', item: 'Bob', descripción: 40, selection: 'Chicago' },
     { id: '4', item: 'Alice', descripción: 35, selection: 'San Francisco' },
     { id: '1', item: 'John', descripción: 25, selection: 'New York' },
     { id: '2', item: 'Jane', descripción: 30, selection: 'Los Angeles' },
     { id: '3', item: 'Bob', descripción: 40, selection: 'Chicago' },
     { id: '4', item: 'Alice', descripción: 35, selection: 'San Francisco' },
    // agrega más datos como sea necesario
  ];
  dataSource = new MatTableDataSource(this.data);
  busqueda: string = '';

  ngOnInit() {
    this.dataSource.filterPredicate = (data, busqueda) => {
      return data.item.toString().toLowerCase().startsWith(busqueda);
    }
  }
  aplicarFiltro() {
    this.dataSource.filter = this.busqueda.trim().toLowerCase();
  }
}
