import{Pipe, PipeTransform} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Pipe({
    name: 'fetch',
    pure: false
})
export class FetchJsonPipe implements PipeTransform     {
    
    private cachedData: any  = null;
    private cachedUrl = '';

    constructor(private http: HttpClient)
    {
         
    }
    transform(url: string)
    {
        if(url != this.cachedUrl)
        {
            this.cachedData = null;
            this.cachedUrl = url; 
            this.http.get(url).subscribe(data => this.cachedData = data);
            console.log("cachedData inside transform" + this.cachedData);
        }
        return this.cachedData;
    }
}