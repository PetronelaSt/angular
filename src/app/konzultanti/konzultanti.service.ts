import { Injectable } from '@angular/core';
import { Konzultant } from './Konzultant';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KonzultantiService {

  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/konzultanti';

  getKonzultantiFromServer(): Observable<Konzultant[]> {
    return this.http.get<Konzultant[]>(this.serverUrl);
  }

  addZamestnanec(konzultant: Konzultant):Observable<any> {
    return this.http.post(this.serverUrl, konzultant);
  }
}
