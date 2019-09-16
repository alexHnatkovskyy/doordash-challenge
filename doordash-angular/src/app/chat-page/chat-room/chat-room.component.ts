import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { ChatRoom, IChatMessage } from '../../models/chat-room';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { SessionService } from '../../services/session.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  chatRoomId: number = null;
  chatRoom: ChatRoom;
  messages: IChatMessage[] = [];
  messagesSubscription: Subscription;
  currentUser: User = this.sessionService.user;

  constructor( private route: ActivatedRoute, private chatService: ChatService, private sessionService: SessionService) {
  }

  ngOnInit() {
    this.route.params.subscribe(( params ) => {
      this.initChatRoom(params.id);
    });
  }

  initChatRoom( roomId: number ): void {
    this.chatRoomId = roomId;

    this.chatService.getChatRoomDetails(roomId)
      .pipe(take(1))
      .subscribe(( chatRoom ) => {
        this.chatRoom = chatRoom;
      });

    this.unsubscribeFromMessagesPolling();

    this.messagesSubscription = this.chatService.pollChatRoomMessages(roomId)
      .subscribe(( messages ) => {
        this.messages = messages;
      });
  }

  handleMessageSubmit(text: string) {
    this.chatService.postMessageInChatRoom(this.chatRoomId, text, this.currentUser.name)
      .subscribe();
  }

  private unsubscribeFromMessagesPolling() {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
      this.messages = [];
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeFromMessagesPolling();
  }
}
