import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class MessageService {
  public messages: Array<string> = [];

  public add(message: string) {
    this.messages.push(message);
  }

  public clear() {
    this.messages = [];
  }
}

export default MessageService;
