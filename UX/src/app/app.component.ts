import { Component } from '@angular/core';
import { RequestInterceptor } from './services/interceptors/RequestInterceptor';
import { RequestStatus } from './helpers/enums/requestStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 get IsHttpRequestProcessing() : boolean{
   return  RequestInterceptor.requestStatus == RequestStatus.Processing;
 }

  title = 'angular-tour-of-heroes';
}
