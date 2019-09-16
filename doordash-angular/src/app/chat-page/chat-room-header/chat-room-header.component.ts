import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChatRoom } from '../../models/chat-room';
import { User } from '../../models/user';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-chat-room-header',
  templateUrl: './chat-room-header.component.html',
  styleUrls: ['./chat-room-header.component.scss']
})
export class ChatRoomHeaderComponent implements OnInit, OnChanges {
  @Input() chatRoom: ChatRoom;

  currentUser: User = this.sessionService.user;
  participants: string[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.normalizeRoomUsersList(this.chatRoom.users);
  }

  ngOnChanges( changes: SimpleChanges ): void {
    this.normalizeRoomUsersList(this.chatRoom.users);
  }

  // Current user has to be first in the list of room participants
  private normalizeRoomUsersList(users) {
    this.participants =  users.reduce((usersList, user) => {
      if (user !== this.currentUser.name) {
        usersList.push(user);
      }

      return usersList;
    }, [this.currentUser.name]);
  }

  trackUsersBy(index) {
    return index;
  }
}
