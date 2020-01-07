import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators"
import { Injectable } from "@angular/core";
import { RequestStatus } from "../../helpers/enums/requestStatus";

@Injectable()
export class RequestInterceptor implements HttpInterceptor{
    public static requestStatus : RequestStatus;
    
    /**
     *
     */
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        RequestInterceptor.requestStatus = RequestStatus.None;
        return next.handle(req)
        .pipe(
            tap(evt =>{
                RequestInterceptor.requestStatus = RequestStatus.Processing;
               if(evt instanceof HttpResponse){
                RequestInterceptor.requestStatus = RequestStatus.Completed;
                    console.log('hiding loader...  ' +  RequestInterceptor.requestStatus);
                }
            })
        )  
    }

}