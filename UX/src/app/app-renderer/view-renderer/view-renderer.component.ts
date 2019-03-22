import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-renderer',
  templateUrl: './view-renderer.component.html',
  styleUrls: ['./view-renderer.component.css']
})
export class ViewRendererComponent {
@Input() viewData;

  constructor() { }

}
