import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //constructor(private messageService: MessageService) {
  //angular only binds to public component properties.
  constructor(public messageService: MessageService) { // messageService property must be public because you are about to bind to it in the template.
    
   }

  ngOnInit() {
    
  }

}
