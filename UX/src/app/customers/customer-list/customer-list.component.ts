import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private _downloadService: DownloadService) { }
blob:any;
  ngOnInit() {
  }

  downloadSampleProduct()
  {

    console.log("now download lazy module works")
     debugger;
    this._downloadService.getFile("https://localhost:44380/api/download/34",null)
    .subscribe(data=>{
      this.blob = new Blob([data.body], {type: 'application/pdf'});
    console.log(data);
    console.log(data.headers.get('file-name'));
      var downloadURL = window.URL.createObjectURL(data.body);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "help.pdf";
      link.click();
    })

    
  }
}
