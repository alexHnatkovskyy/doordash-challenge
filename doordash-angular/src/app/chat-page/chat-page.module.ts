import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page.component';
import { ChatPageRoutingModule } from './chat-page-routing.module';
import { ChatNavigationComponent } from './chat-navigation/chat-navigation.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChatUserInfoComponent } from './chat-user-info/chat-user-info.component';
import { ChatRoomHeaderComponent } from './chat-room-header/chat-room-header.component';
import { ChatRoomFooterComponent } from './chat-room-footer/chat-room-footer.component';
import { ChatRoomConversationComponent } from './chat-room-conversation/chat-room-conversation.component';
import { FormsModule } from '@angular/forms';
import { ConversationAutoScrollDirective } from './conversation-auto-scroll.directive';

@NgModule({
  declarations: [
    ChatPageComponent,
    ChatNavigationComponent,
    ChatRoomComponent,
    ChatUserInfoComponent,
    ChatRoomHeaderComponent,
    ChatRoomFooterComponent,
    ChatRoomConversationComponent,
    ConversationAutoScrollDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ChatPageRoutingModule,
    FormsModule
  ]
})
export class ChatPageModule {
}
