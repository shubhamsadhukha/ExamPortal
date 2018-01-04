import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionPaperService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllQuestionPapers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/quespaper/all').map(res => res.json());
  }

  countQuestionPapers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/quespaper/count').map(res => res.json());
  }

  addQuestionPaper(QuestionPaper): Observable<any> {
    return this.http.post('http://localhost:3000/api/quespaper/add', JSON.stringify(QuestionPaper), this.options);
  }

  getQuestionPaper(QuestionPaper): Observable<any> {
    return this.http.get(`http://localhost:3000/api/quespaper/${QuestionPaper._id}`).map(res => res.json());
  }

  editQuestionPaper(QuestionPaper): Observable<any> {
    return this.http.put(`http://localhost:3000/api/quespaper/${QuestionPaper._id}`, JSON.stringify(QuestionPaper), this.options);
  }

  deleteQuestionPaper(QuestionPaper): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/quespaper/${QuestionPaper._id}`, this.options);
  }

}
