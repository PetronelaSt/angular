import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Zamestnanec } from '../zamestnanci/Zamestnanec';

@Injectable()
export class ZamestnanciService {

  constructor(private http: HttpClient) { }
  private serverUrl = 'http://localhost:8080/zamestnanci';

  /*getZamestnanci():Observable<Zamestnanec[]> {
    return of(this.zamestnanci);
  }*/

  getZamestnanciFromServer(): Observable<Zamestnanec[]> {
    return this.http.get<Zamestnanec[]>(this.serverUrl);
  }

  addZamestnanec(zamestnanec: Zamestnanec):Observable<any> {
    return this.http.post(this.serverUrl, zamestnanec);
  }
}
