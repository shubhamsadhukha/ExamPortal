import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllResults(): Observable<any> {
    return this.http.get('http://localhost:3000/api/result/all').map(res => res.json());
  }

  countResults(): Observable<any> {
    return this.http.get('http://localhost:3000/api/result/count').map(res => res.json());
  }

  addResult(Result): Observable<any> {
    return this.http.post('http://localhost:3000/api/result/add', JSON.stringify(Result), this.options);
  }

  getResult(Result): Observable<any> {
    return this.http.get(`http://localhost:3000/api/result/${Result._id}`).map(res => res.json());
  }

  editResult(Result): Observable<any> {
    return this.http.put(`http://localhost:3000/api/result/${Result._id}`, JSON.stringify(Result), this.options);
  }

  deleteResult(Result): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/result/${Result._id}`, this.options);
  }

}
