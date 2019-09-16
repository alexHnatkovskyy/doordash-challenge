import { Component, EventEmitter, Output, Renderer2,  AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat-room-footer',
  templateUrl: './chat-room-footer.component.html',
  styleUrls: ['./chat-room-footer.component.scss']
})
export class ChatRoomFooterComponent implements AfterViewChecked {
  message: string;

  @Output() messageSubmit = new EventEmitter<string>();
  constructor(private renderer: Renderer2) {
  }

  ngAfterViewChecked(): void {
    this.renderer.selectRootElement('input[name="message"]', true).focus();
  }

  submitMessage() {
    this.messageSubmit.emit(this.message);
    this.message = '';
  }
}
