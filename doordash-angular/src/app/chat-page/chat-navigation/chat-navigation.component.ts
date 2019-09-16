import { Component, Input, OnInit } from '@angular/core';
import { ChatRoom } from '../../models/chat-room';

@Component({
  selector: 'app-chat-navigation',
  templateUrl: './chat-navigation.component.html',
  styleUrls: ['./chat-navigation.component.scss']
})
export class ChatNavigationComponent implements OnInit {
  @Input() chatRooms: ChatRoom[] = [];

  constructor() { }

  ngOnInit() {
  }
}
