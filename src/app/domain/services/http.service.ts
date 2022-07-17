import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Metodo {
  url: string,
  data?: object,
  header?: HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  private baseurl: string = environment.baseurl;
  constructor(public http: HttpClient) { }

  get(method: Metodo): Observable<any> {
    return this.http.get(`${this.baseurl}${method.url}`, {});
  }

  post(method: Metodo): Observable<any> {
    return this.http.post(`${this.baseurl}${method.url}`, method.data, { headers: method.header });
  }

  patch(method: Metodo): Observable<any> {
    // if (!method.port) method.port = 8000;
    return this.http.patch(`${this.baseurl}${method.url}`, method.data, { headers: method.header });
  }

  put(method: Metodo): Observable<any> {
    return this.http.put(`${this.baseurl}${method.url}`, method.data, { headers: method.header });
  }

  delete(method: Metodo): Observable<any> {
    return this.http.delete(`${this.baseurl}${method.url}`);
  }

}
