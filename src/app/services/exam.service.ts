import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ExamService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  
  constructor(private http: Http) { }

  getAllExams(): Observable<any> {
    return this.http.get('http://localhost:3000/api/exam/all').map(res => res.json());
  }

  countExams(): Observable<any> {
    return this.http.get('http://localhost:3000/api/exam/count').map(res => res.json());
  }

  addExam(Exam): Observable<any> {
    return this.http.post('http://localhost:3000/api/exam/add', JSON.stringify(Exam), this.options);
  }

  getExam(Exam): Observable<any> {
    return this.http.get(`http://localhost:3000/api/exam/${Exam._id}`).map(res => res.json());
  }

  editExam(Exam): Observable<any> {
    return this.http.put(`http://localhost:3000/api/exam/${Exam._id}`, JSON.stringify(Exam), this.options);
  }

  deleteExam(Exam): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/exam/${Exam._id}`, this.options);
  }

}
