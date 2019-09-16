import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-room-footer',
  templateUrl: './chat-room-footer.component.html',
  styleUrls: ['./chat-room-footer.component.scss']
})
export class ChatRoomFooterComponent {
  message: string;

  @Output() messageSubmit = new EventEmitter<string>();
  constructor() {
  }

  submitMessage() {
    this.messageSubmit.emit(this.message);
    this.message = '';
  }
}
