import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getBooks(): Observable<any> {
    return this.http.get('http://localhost:3000/api/').map(res => res.json());
  }

  countBooks(): Observable<any> {
    return this.http.get('/api/count').map(res => res.json());
  }

  addBook(Book): Observable<any> {
    return this.http.post('/api/', JSON.stringify(Book), this.options);
  }

  getBook(Book): Observable<any> {
    return this.http.get(`/api/${Book._id}`).map(res => res.json());
  }

  editBook(Book): Observable<any> {
    return this.http.put(`/api/${Book._id}`, JSON.stringify(Book), this.options);
  }

  deleteBook(Book): Observable<any> {
    return this.http.delete(`/api/${Book._id}`, this.options);
  }

}
