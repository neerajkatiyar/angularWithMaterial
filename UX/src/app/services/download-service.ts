import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpService} from './httpService';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
 providedIn : 'root',
})

export class DownloadService extends HttpService
{
    /**
     *
     */
    constructor(http: HttpClient) {
        super(http);

    }

    getPDF(uri: string): Observable<HttpResponse<Blob>> {   
        //const options = { responseType: 'blob' }; there is no use of this
            // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
            return this.getFile(uri,null);
        }
}

