import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ChatService } from './chat.service';
import { ChatRoom } from '../models/chat-room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatPageNavigationResolver implements Resolve<ChatRoom[]> {

  constructor( private chatService: ChatService ) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<ChatRoom[]> {
    return this.chatService.getChatRooms();
  }
}
