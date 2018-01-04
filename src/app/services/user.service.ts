import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/user/all').map(res => res.json());
  }

  countUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/user/count').map(res => res.json());
  }

  addUser(User): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/add', JSON.stringify(User), this.options);
  }

  getUser(User): Observable<any> {
    return this.http.get(`http://localhost:3000/api/user/${User._id}`).map(res => res.json());
  }

  editUser(User): Observable<any> {
    return this.http.put(`http://localhost:3000/api/user/${User._id}`, JSON.stringify(User), this.options);
  }

  deleteUser(User): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/user/${User._id}`, this.options);
  }

}
