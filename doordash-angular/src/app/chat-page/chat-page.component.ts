import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatRoom } from '../models/chat-room';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  chatRooms: ChatRoom[] = [];
  activeChatRoomId: number = null;

  constructor( private route: ActivatedRoute ) {
  }

  ngOnInit() {
    combineLatest([this.route.params, this.route.data])
      .subscribe(( [routeParams, routeData] ) => {
        this.activeChatRoomId = routeParams.id;
        this.chatRooms = routeData.rooms;
      });
  }
}
