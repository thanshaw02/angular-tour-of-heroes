import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class MessageService {
  messages: Array<string> = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

export default MessageService;
