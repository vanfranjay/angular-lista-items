import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    this.http.get<any[]>('http://api.example.com/items').subscribe(
      response => {
        this.dataSubject.next(response.map(item => ({ id: item.id, item: item.name, description: item.description, selection: item.city })));
      },
      error => {
        console.log('Error getting data from API:', error);
      }
    );
    return this.dataSubject.asObservable();
  }
}
