import { Component } from '@angular/core';
import MessageService from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // Angular only binds to public component properties.
  constructor(public messageService: MessageService) {  }

}
