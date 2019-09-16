import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IChatMessage } from '../../models/chat-room';

@Component({
  selector: 'app-chat-room-conversation',
  templateUrl: './chat-room-conversation.component.html',
  styleUrls: ['./chat-room-conversation.component.scss']
})
export class ChatRoomConversationComponent implements OnInit {
  @Input() messages: IChatMessage[];
  @Input() currentUserName: string;

  constructor() { }

  ngOnInit() {
  }

  trackMessagesFn(index, item: IChatMessage) {
    return item.name + item.message;
  }
}
