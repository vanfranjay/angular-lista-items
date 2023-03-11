import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [
    { id: '1', item: 'John', descripción: 25, selection: 'New York' },
    { id: '2', item: 'Jane', descripción: 30, selection: 'Los Angeles' },
    { id: '3', item: 'Bob', descripción: 40, selection: 'Chicago' },
    { id: '4', item: 'Alice', descripción: 35, selection: 'San Francisco' },
    // agrega más datos como sea necesario
  ];

  private dataSubject = new BehaviorSubject<any[]>(this.data);

  getData() {
    return this.dataSubject.asObservable();
  }

  updateData(data: any[]) {
    this.data = data;
    this.dataSubject.next(this.data);
  }
}
