import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllQuestions(): Observable<any> {
    return this.http.get('http://localhost:3000/api/ques/all').map(res => res.json());
  }

  countQuestions(): Observable<any> {
    return this.http.get('http://localhost:3000/api/ques/count').map(res => res.json());
  }

  addQuestion(Question): Observable<any> {
    return this.http.post('http://localhost:3000/api/ques/add', JSON.stringify(Question), this.options);
  }

  getQuestion(Question): Observable<any> {
    return this.http.get(`http://localhost:3000/api/ques/${Question._id}`).map(res => res.json());
  }

  editQuestion(Question): Observable<any> {
    return this.http.put(`http://localhost:3000/api/ques/${Question._id}`, JSON.stringify(Question), this.options);
  }

  deleteQuestion(Question): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/ques/${Question._id}`, this.options);
  }

}
