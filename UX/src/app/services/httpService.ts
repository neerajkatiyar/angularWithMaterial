import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Config} from '../models/config';

export class HttpService{

    config: Config;
    configUrl = 'assets/config.json';

 /**
  *constructor to assign private var's
  */
 constructor(private http : HttpClient) {
    this.getConfigResponse().subscribe(resp => {
        const keys = resp.headers.keys();
        this.config = resp.body;
    })
 }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
          this.configUrl, { observe: 'response' });
      }

      get<T>(url : string):  Observable<HttpResponse<T>>{
        return this.http.get<T>(
            url, { observe: 'response' });
      }
}
